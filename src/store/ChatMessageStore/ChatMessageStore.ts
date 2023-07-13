import { action, makeObservable, observable } from "mobx";
import AuthStore from "../authStore/authStore";
import { io, Socket } from "socket.io-client";

type DefaultEventsMap = Record<string, unknown>; // Define the DefaultEventsMap type

class ChatMessageStore {
  auth : any
  sockteId: any = null;
  socket: Socket<DefaultEventsMap> | null = null; // Use the DefaultEventsMap type

  openMessageDrawer = {
    type: "",
    open: false,
  };

  constructor() {
    makeObservable(this, {
      openMessageDrawer: observable,
      setOpenMessageDrawer: action,
      createTask: action,
      sockteId: observable,
      socket: observable,
      createSocketConnection:action
    });
  }

  createSocketConnection = () => {
    this.auth = new AuthStore();
    this.socket = io("http://localhost:9000");
    this.socket.on("connect", () => {
      this.sockteId = this.socket?.id;
    });
  }

  createTask = async () => {};

  setOpenMessageDrawer = (type: string, data?: any) => {
    this.openMessageDrawer.open = this.openMessageDrawer.open ? false : true;
    this.openMessageDrawer.type = type;
    if (type === "edit") {
      console.log(data);
    } else {
    }
  };
}

export default ChatMessageStore;
