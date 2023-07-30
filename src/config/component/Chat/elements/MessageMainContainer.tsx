import { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import MessageContainer from "./MessageContainer";
import SendMessageContainer from "./SendMessageContainer";
import { observer } from "mobx-react-lite";
import store from "../../../../store/store";

const MessageMainContainer = observer(() => {
  const {
    auth: { user },
    chatMessage: { socket, userConnected, setUserConnected },
  } = store;

  useEffect(() => {
    if (socket && userConnected === false) {
      // @ts-ignore
      socket.emit("user_connected", {
        username: user.username,
        pic: user.pic,
        name: user.name,
        _id: user._id,
      });
      setUserConnected();
    }
  }, [user, socket, userConnected, setUserConnected]);

  const users = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/path/to/avatar1.png",
      message: "Hello there!",
      createdAt: "12/10/2023",
      me: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/path/to/avatar2.png",
      message: "How are you?",
      createdAt: "12/10/2023",
      me: false,
    },
    {
      id: 3,
      name: "Alice Johnson",
      avatar: "/path/to/avatar3.png",
      message: "Nice to meet you!",
      createdAt: "12/10/2023",
      me: false,
    },
    {
      id: 4,
      name: "Alice Johnson",
      avatar: "/path/to/avatar3.png",
      message: "Nice to meet you!",
      createdAt: "12/10/2023",
      me: true,
    },
    {
      id: 5,
      name: "Alice Johnson",
      avatar: "/path/to/avatar3.png",
      message: "Nice to meet you!",
      createdAt: "12/10/2023",
      me: false,
    },
    {
      id: 6,
      name: "Alice Johnson",
      avatar: "/path/to/avatar3.png",
      message: "Nice to meet you!",
      createdAt: "12/10/2023",
      me: true,
    },
    {
      id: 7,
      name: "Alice Johnson",
      avatar: "/path/to/avatar3.png",
      message: "Nice to meet you!",
      createdAt: "12/10/2023",
      me: false,
    },
    {
      id: 8,
      name: "Alice Johnson",
      avatar: "/path/to/avatar3.png",
      message: "Nice to meet you!",
      createdAt: "12/10/2023",
      me: true,
    },
  ];

  return (
    <Flex flexDirection="column" justifyContent="space-between" m={-6}>
      <Box
        mt={1}
        p={5}
        overflowY="auto"
        overflowX={"hidden"}
        flex="1"
        minH="80vh"
        maxH={"80vh"}
      >
        {users.map((user) => (
          <MessageContainer key={user.id} user={user} />
        ))}
      </Box>
      <Box mt={5}>
        <SendMessageContainer />
      </Box>
    </Flex>
  );
});

export default MessageMainContainer;
