import axios from "axios";
import { action, makeObservable, observable } from "mobx";

class ProjectStore {
  openProjectDrawer = {
    type: "",
    open: false,
  };

  constructor() {
    makeObservable(this, {
      openProjectDrawer: observable,
      setOpenProjectDrawer: action,
      createProject: action,
      getFilterProject: action,
    });
  }

  createProject = async (sendData: any) => {
    try {
      const { data } = await axios.post("/project/create", sendData);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err);
    }
  };

  getFilterProject = async (project_name: string) => {
    try {
      const { data } = await axios.get(
        `/project/get?project_name=${project_name}`
      );
      console.log(data);
      return data;
    } catch (err: any) {
      return Promise.reject(err?.response?.data || err?.message);
    }
  };

  setOpenProjectDrawer = (type: string, data?: any) => {
    this.openProjectDrawer.open = this.openProjectDrawer.open ? false : true;
    this.openProjectDrawer.type = type;
    if (type === "edit") {
      console.log(data);
    } else {
    }
  };
}

export default ProjectStore;