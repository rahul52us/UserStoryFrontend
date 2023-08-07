import axios from "axios";
import { action, makeObservable, observable } from "mobx";

class StudentStore {
  classes = {
    data: [],
    loading: false,
    hasFetch: false,
  };

  studentDrawerForm = {
    type: "",
    open: false,
  };

  constructor() {
    makeObservable(this, {
      studentDrawerForm: observable,
      classes: observable,
      setHandleFormDrawer: action,
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

  setHandleFormDrawer = (type: string, data?: any) => {
    this.studentDrawerForm.open = this.studentDrawerForm.open ? false : true;
    this.studentDrawerForm.type = type;
    if (type === "edit") {
      console.log(data);
    } else {
    }
  };
}

export default StudentStore;
