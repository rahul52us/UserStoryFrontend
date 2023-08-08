import axios from "axios";
import { action, makeObservable } from "mobx";

class BlogStore {
  constructor() {
    makeObservable(this, {
      getExam: action,
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


  getExam = async (id: any) => {
    try {
      const { data } = await axios.get(`/exam/${id}`);
      return data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    } finally {
    }
  };
}

export default BlogStore;
