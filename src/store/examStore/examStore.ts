import axios from "axios";
import { action, makeObservable } from "mobx";

class ExamStore {
  constructor() {
    makeObservable(this, {
      getExam: action,
    });
  }

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

export default ExamStore;
