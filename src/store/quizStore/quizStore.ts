import axios from "axios";
import { action, makeObservable, observable } from "mobx";
import { QuizCategoryValue } from "../../pages/Dashboard/quiz/component/category/utils/dto";

class QuizStore {
  categories: any = [];
  openDeleteCategoryModal: any = {
    data: null,
    open: false,
  };

  constructor() {
    makeObservable(this, {
      categories: observable,
      openDeleteCategoryModal: observable,
      getCategories: action,
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

  getCategories = async () => {
    try {
      const { data } = await axios.get("quiz/auth/categories");
      this.categories = data.data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err?.message);
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
      console.log(id)
      const { data } = await axios.delete(`quiz/category/${id}`);
      this.categories =  this.categories.filter((item : any) => item._id.toString() !== id)
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err?.message);
    }
  };
}

export default QuizStore;
