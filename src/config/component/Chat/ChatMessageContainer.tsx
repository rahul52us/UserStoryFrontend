import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import store from "../../../store/store";
import CustomDrawer from "../Drawer/CustomDrawer";
import MessageMainContainer from "./elements/MessageMainContainer";
import FileViewer from "../FileViewer/FileViewer";

const ChatMessageContainer = observer(() => {
  const {
    chatMessage: {
      openMessageDrawer,
      setOpenMessageDrawer,
      socket,
      createSocketConnection,
      addOnlineConnectedUsers,
      removeOnlineConnectedUsers,
    },
    auth: { user },
  } = store;

  useEffect(() => {
    console.log("ChatMessageContainer --> UseEffect");
    if (!socket && user) {
      createSocketConnection();
    }
  }, [socket, user, createSocketConnection]);

  useEffect(() => {
    try {
      if (socket) {
        // @ts-ignore
        socket.on("user-status-change", (data) => {
          if (data.status === "online") {
            addOnlineConnectedUsers({ ...data });
          }
          if (data.status === "offline") {
            removeOnlineConnectedUsers({ ...data });
          }
        });
      }
    } catch (err) {}
  }, [socket, addOnlineConnectedUsers, removeOnlineConnectedUsers]);

  return (
    <CustomDrawer
      open={openMessageDrawer.open}
      close={setOpenMessageDrawer}
      title="Chat Message"
    >
      {socket ? (
        <MessageMainContainer />
      ) : (
        <>
          <FileViewer />
        </>
      )}
    </CustomDrawer>
  );
});

export default ChatMessageContainer;
