import axios from "axios";
import { action, makeObservable, observable } from "mobx";

class VideoStore {
  videos : any = {
    data: [],
    currentPage: 1,
    hasMore: false,
    loading: true,
    hasFetch: false,
  };

  openVideoDrawer = {
    type: "",
    open: false,
  };

  constructor() {
    makeObservable(this, {
      openVideoDrawer: observable,
      setOpenVideoDrawer: action,
      createVideo: action,
    });
  }

  createVideo = async (sendData : any) => {
    try {
      const { data } = await axios.post(`/videos/create`, sendData);
      this.videos.data.unshift(data.data);
      return data;
    } catch (err : any) {
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
