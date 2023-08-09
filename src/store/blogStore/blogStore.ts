import axios from "axios";
import { action, makeObservable, observable } from "mobx";

class BlogStore {
  blogs = {
    data : [],
    loading : false,
    hasFetch : false,
    currentPage : 1,
    TotalPages : 0
  }

  constructor() {
    makeObservable(this, {
      blogs:observable,
      getBlogs: action,
      createBlog: action
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


  getBlogs = async() => {
    try {
      this.blogs.loading = true
      const { data } = await axios.post(`/blog/get`);
      this.blogs.data = data?.data?.data || []
      this.blogs.TotalPages = data?.data?.totalPages || 0
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    } finally {
      this.blogs.loading = false
    }
  };
}

export default BlogStore;