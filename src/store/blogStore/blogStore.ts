import axios from "axios";
import { action, makeObservable, observable } from "mobx";

class BlogStore {
  blogs = {
    data: [],
    loading: false,
    hasFetch: false,
    currentPage: 1,
    TotalPages: 0,
  };

  blogComments = {
    data: [] as any,
    loading: false,
    hasFetch: false,
    currentPage: 1,
    TotalPages: 0,
    totalComments:0
  };

  constructor() {
    makeObservable(this, {
      blogs: observable,
      blogComments: observable,
      getBlogs: action,
      createBlog: action,
      getSingleBlogs: action,
      getComments: action,
      createComment: action,
    });
  }

  createBlog = async (sendData: any) => {
    try {
      const { data } = await axios.post("/blog", sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  getSingleBlogs = async (sendData: any) => {
    try {
      this.blogs.loading = true;
      const { data } = await axios.get(`/blog/${sendData}`);
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    } finally {
      this.blogs.loading = false;
    }
  };

  getBlogs = async () => {
    try {
      this.blogs.loading = true;
      const { data } = await axios.post(`/blog/get`);
      this.blogs.data = data?.data?.data || [];
      this.blogs.TotalPages = data?.data?.totalPages || 0;
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    } finally {
      this.blogs.loading = false;
    }
  };

  getComments = async (blogId: any) => {
    try {
      this.blogComments.loading = true;
      const { data } = await axios.get(`/blog/comments/${blogId}`);
      this.blogComments.data = data?.data?.comments || [];
      this.blogComments.totalComments = data?.data?.totalComments || 0;
      this.blogComments.TotalPages = data?.data?.totalPages || 0;
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    } finally {
      this.blogs.loading = false;
    }
  };

  createComment = async (sendData: any) => {
    try {
      const { data } = await axios.post(`/blog/comment/${sendData?.blogId}`, {
        content: sendData.content,
        parentComment: sendData?.parentComment,
      });
      this.blogComments.data.unshift(data.data);
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };
}

export default BlogStore;
