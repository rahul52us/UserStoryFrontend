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
    data: [],
    loading: false,
    hasFetch: false,
    currentPage: 1,
    TotalPages: 0,
  };

  constructor() {
    makeObservable(this, {
      blogs: observable,
      blogComments:observable,
      getBlogs: action,
      createBlog: action,
      getSingleBlogs: action,
      getComments:action
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
      this.blogComments.data = data?.data || [];
      this.blogComments.TotalPages = data?.data?.totalPages || 0;
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    } finally {
      this.blogs.loading = false;
    }
  };
}

export default BlogStore;