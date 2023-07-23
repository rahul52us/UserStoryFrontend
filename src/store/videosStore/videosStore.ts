import axios from "axios";
import { action, makeObservable, observable } from "mobx";

class VideoStore {
  categories: any = {
    data: [],
    currentPage: 1,
    hasMore: false,
    loading: true,
    hasFetch: false,
    totalPages: 0,
  };
  videos: any = {
    data: [],
    currentPage: 1,
    hasMore: false,
    loading: true,
    hasFetch: false,
    totalPages: 0,
  };

  openVideoDrawer = {
    type: "",
    open: false,
  };

  constructor() {
    makeObservable(this, {
      openVideoDrawer: observable,
      categories:observable,
      videos:observable,
      setOpenVideoDrawer: action,
      createVideo: action,
      getCategories:action
    });
  }

  getCategories = async (sendData: any) => {
    try {
      this.categories.loading = true;
      this.categories.hasFetch = true;
      const { data } = await axios.post(`/videos/categories`, sendData);
      console.log(data)
      this.categories.data = data?.data?.categories;
      this.categories.totalPages = data.data?.totalPages;
      return data;
    } catch (err: any) {
      this.categories.hasFetch = false;
      return Promise.reject(err?.response?.data);
    } finally {
      this.categories.loading = false;
    }
  };

  createVideo = async (sendData: any) => {
    try {
      const { data } = await axios.post(`/videos/create`, sendData);
      this.videos.data.unshift(data.data);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data);
    }
  };

  setOpenVideoDrawer = (type: string, data?: any) => {
    this.openVideoDrawer.open = this.openVideoDrawer.open ? false : true;
    this.openVideoDrawer.type = type;
    if (type === "edit") {
      console.log(data);
    } else {
    }
  };
}

export default VideoStore;
