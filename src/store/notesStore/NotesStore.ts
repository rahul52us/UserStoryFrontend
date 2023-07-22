import axios from "axios";
import { makeObservable, observable, action, computed } from "mobx";
import { advancedSearch } from "../../config/constant/function";

class NotesStore {
  categories: any = {
    data: [],
    currentPage: 1,
    loading: true,
    hasFetch: false,
    totalPages: 0,
  };

  originalData: any[] = [];

  constructor() {
    makeObservable(this, {
      categories: observable,
      originalData: observable,
      getCategories: action,
      localFiltering: action,
      filteredData: computed,
    });
  }

  getCategories = action(async (sendData: any) => {
    this.categories.loading = true;
    try {
      const { data } = await axios.get(
        `notes/categories?page=${sendData.page}&limit=15`
      );
      this.categories.hasFetch = true;
      this.categories.data = data.data.categories;
      this.categories.totalPages = data?.data?.totalPages;

      // Store the original data on fetch
      this.originalData = data.data.categories;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    } finally {
      this.categories.loading = false;
    }
  });

  localFiltering = (searchValue: any) => {
    const filteredData = advancedSearch(this.originalData, searchValue);
    this.categories.data = filteredData;
  };

  get filteredData() {
    return this.categories.data;
  }
}

export default NotesStore;
