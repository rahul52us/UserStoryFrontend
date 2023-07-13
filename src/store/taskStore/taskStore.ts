import { action, makeObservable, observable } from "mobx";

class TaskStore {
  openTaskDrawer = {
    type: "",
    open: false,
  };

  constructor() {
    makeObservable(this, {
      openTaskDrawer: observable,
      setOpenTaskDrawer: action,
      createTask: action,
    });
  }

  createTask = async () => {};

  setOpenTaskDrawer = (type: string, data?: any) => {
    this.openTaskDrawer.open = this.openTaskDrawer.open ? false : true;
    this.openTaskDrawer.type = type;
    if (type === "edit") {
      console.log(data);
    } else {
    }
  };
}

export default TaskStore;
