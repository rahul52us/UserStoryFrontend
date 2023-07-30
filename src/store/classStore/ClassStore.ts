import axios from "axios";
import { action, makeObservable, observable } from "mobx";

class ClassStore {
  classes = {
    data: [],
    loading: false,
    hasFetch: false,
  };

  openTaskDrawer = {
    type: "",
    open: false,
  };

  constructor() {
    makeObservable(this, {
      openTaskDrawer: observable,
      classes: observable,
      setOpenTaskDrawer: action,
      getClasses: action,
      createClass: action,
      updateClass: action
    });
  }

  createClass = async (sendData: any) => {
    try {
      const { data } = await axios.post("/class/create", sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  updateClass = async (sendData: any) => {
    try {
      const { data } = await axios.put(`/class/update/${sendData._id}`, sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  getClasses = async (sendData: any) => {
    try {
      this.classes.loading = true
      const { data } = await axios.post("/class", sendData);
      this.classes.data = data.data;
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    } finally {
      this.classes.loading = false;
    }
  };

  setOpenTaskDrawer = (type: string, data?: any) => {
    this.openTaskDrawer.open = this.openTaskDrawer.open ? false : true;
    this.openTaskDrawer.type = type;
    if (type === "edit") {
      console.log(data);
    } else {
    }
  };
}

export default ClassStore;
