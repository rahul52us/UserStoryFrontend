import axios from "axios";
import { action, makeObservable, observable } from "mobx";
import { QuizCategoryValue } from "../../pages/Dashboard/quiz/component/Forms/utils/dto";

class QuizStore {
  dashQuiz: any = {
    data: [],
    loading: false,
    hasFetch: false,
  };

  categories: any = [];
  openDeleteCategoryModal: any = {
    data: null,
    open: false,
  };

  constructor() {
    makeObservable(this, {
      categories: observable,
      openDeleteCategoryModal: observable,
      dashQuiz: observable,
      CreateQuiz:action,
      getCategories: action,
      getDashQuiz: action,
      createCategory: action,
      deleteCategory: action,
      setDeleteCategoryModal: action,
    });
  }

  setDeleteCategoryModal = (data: any = undefined) => {
    if (this.openDeleteCategoryModal.open === true) {
      this.openDeleteCategoryModal = {
        data: null,
        open: false,
      };
    } else {
      const dt = this.categories.filter(
        (item: any) => item._id.toString() === data?.action
      );
      this.openDeleteCategoryModal = {
        data: dt.length ? dt[0] : null,
        open: true,
      };
    }
  };

  CreateQuiz = async (sendData : any) => {
    try {
      const { data } = await axios.post("quiz/create", sendData);
      console.log(data)
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err?.message);
    }
  }

  getDashQuiz = async () => {
    try {
      this.dashQuiz.loading = true;
      const { data } = await axios.post("/quiz");
      this.dashQuiz.data = data.data;
      console.log(data);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err?.message);
    } finally {
      this.dashQuiz.loading = false;
    }
  };

  getCategories = async () => {
    try {
      this.dashQuiz.loading = true;
      const { data } = await axios.post("/quiz");
      // this.dashQuiz.data = data.data;
      // console.log(data);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err?.message);
    } finally {
      this.dashQuiz.loading = false;
    }
  };

  createCategory = async (categoryData: QuizCategoryValue) => {
    try {
      const { data } = await axios.post("quiz/category/create", categoryData);
      this.categories.push(data.data);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err?.message);
    }
  };

  deleteCategory = async (id: string) => {
    try {
      const { data } = await axios.delete(`quiz/category/${id}`);
      this.categories = this.categories.filter(
        (item: any) => item._id.toString() !== id
      );
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err?.message);
    }
  };
}

export default QuizStore;
