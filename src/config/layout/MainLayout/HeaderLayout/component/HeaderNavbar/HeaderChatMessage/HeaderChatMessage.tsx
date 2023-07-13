import { IconButton } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { FaRegEnvelope } from "react-icons/fa";
import store from "../../../../../../../store/store";

const HeaderChatMessage = observer(() => {
  const {chatMessage : {setOpenMessageDrawer}} = store
  return (
    <IconButton
      icon={<FaRegEnvelope />}
      variant="ghost"
      fontSize="xl"
      aria-label={"chat-message-icons"}
      onClick={() => setOpenMessageDrawer('create')}
    />
  );
})

export default HeaderChatMessage;
