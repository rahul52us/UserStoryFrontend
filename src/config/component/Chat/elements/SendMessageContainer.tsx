import { useState, useEffect } from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import CustomInput from "../../CustomInput/CustomInput";
import { observer } from "mobx-react-lite";
import store from "../../../../store/store";

interface TyperData {
  name: string;
  username: string;
  pic: string;
  _id: string;
  userData?: any;
}

const SendMessageContainer = observer(() => {
  const [handleTyper, setHandleTyper] = useState<string>("");
  const {
    chatMessage: { socket },
    auth: { user },
  } = store;
  let typingTimeout: NodeJS.Timeout | null = null; // Store the timeout reference

  useEffect(() => {
    socket?.on("recieved-typing-status", (typer: TyperData) => {
      setHandleTyper(typer.userData.name);
    });

    // Clean up the timeout on unmount
    return () => {
      if (typingTimeout) {
        clearTimeout(typingTimeout);
      }
    };
  }, [socket, typingTimeout]);

  const handleMessageTyping = () => {
    if (!typingTimeout) {
      // @ts-ignore
      socket?.emit("typing-status", {
        name: user.name,
        pic: user.pic,
        username: user.username,
        _id: user._id,
      });
    }

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    typingTimeout = setTimeout(() => {
      // @ts-ignore
      socket?.emit("typing-status", {
        name: "",
        pic: user.pic,
        username: user.username,
        _id: user._id,
      });
      typingTimeout = null;
    }, 3000);
  };

  return (
    <Box h={"100%"} p={4}>
      {handleTyper && <p>{handleTyper} is typing...</p>}
      <Flex alignItems={'center'} justifyContent={'space-between'} columnGap={4}>
      <CustomInput
        name="message"
        placeholder="Type Message here"
        onChange={handleMessageTyping}
      />
      <Button color={'green.400'} mt={1} backgroundColor={'blue.600'} _hover={{backgroundColor:'blue.600'}}>Send Message</Button>
      </Flex>
    </Box>
  );
});

export default SendMessageContainer;
