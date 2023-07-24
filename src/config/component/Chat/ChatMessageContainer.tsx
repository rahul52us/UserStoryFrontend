import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import store from "../../../store/store";
import CustomDrawer from "../Drawer/CustomDrawer";
import MessageMainContainer from "./elements/MessageMainContainer";
import { toJS } from "mobx";

const ChatMessageContainer = observer(() => {
  const {
    chatMessage: {
      openMessageDrawer,
      setOpenMessageDrawer,
      socket,
      createSocketConnection,
      addOnlineConnectedUsers,
      onlineConnectedUsers,
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

  console.log(toJS(onlineConnectedUsers));

  return (
    <CustomDrawer
      open={openMessageDrawer.open}
      close={setOpenMessageDrawer}
      title="Chat Message"
    >
      {socket ? (
        <MessageMainContainer />
      ) : (
        <Heading>Login for the start the chatting</Heading>
      )}
    </CustomDrawer>
  );
});

export default ChatMessageContainer;
