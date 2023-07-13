import { observer } from "mobx-react-lite";
import store from "../../../../store/store";
import CustomDrawer from "../../Drawer/CustomDrawer";
import MessageContainer from "./elements/MessageContainer";
import { useEffect } from "react";
import { Heading } from "@chakra-ui/react";

const ChatMessageContainer = observer(() => {
  const {
    chatMessage: {
      openMessageDrawer,
      setOpenMessageDrawer,
      socket,
      createSocketConnection,
    },
    auth: { user },
  } = store;

  const users = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/path/to/avatar1.png",
      message: "Hello there!",
      createdAt: "12/10/2023",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/path/to/avatar2.png",
      message: "How are you?",
      createdAt: "12/10/2023",
    },
    {
      id: 3,
      name: "Alice Johnson",
      avatar: "/path/to/avatar3.png",
      message: "Nice to meet you!",
      createdAt: "12/10/2023",
    },
  ];

  useEffect(() => {
    if (!socket && user) {
      createSocketConnection();
    }
  }, [socket, user, createSocketConnection]);

  console.log(socket);

  useEffect(() => {
    if (socket) {
      // @ts-ignore
      socket.emit("message" as any, "sendData");
      socket.on("received_message", (data: any) => {
        console.log(data);
      });
    }
  }, [socket]);
  return (
    <CustomDrawer
      open={openMessageDrawer.open}
      close={setOpenMessageDrawer}
      title="Chat Message"
    >
      {socket ? (
        users.map((user: any) => <MessageContainer key={user.id} user={user} />)
      ) : (
        <Heading>Login for the start the chatting</Heading>
      )}
    </CustomDrawer>
  );
});

export default ChatMessageContainer;
