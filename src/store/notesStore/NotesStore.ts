import axios from "axios";
import { makeObservable, observable, action } from "mobx";

class NotesStore {
categories : any = {
    data: [],
    currentPage: 1,
    hasMore: false,
    loading: true,
    hasFetch: false,
};

openTestimonialDrawer = {
    open: false,
};

constructor() {
    makeObservable(this, {
    categories: observable,
    getCategories: action,
    });
}

getCategories = action(async (sendData : any) => {
    this.categories.loading = true;
    try {
    const { data } = await axios.get(
        `notes/categories?page=${sendData.page}&limit=10`
    );
    this.categories.hasFetch = true;
    this.categories.data = [...this.categories.data, ...data.data];
    this.categories.hasMore = data.data.length > 0 ? true : false;

    } catch (err : any) {
    return Promise.reject(err?.response?.data || err);
    } finally {
    this.categories.loading = false;
    }
});
}

export default NotesStore;
