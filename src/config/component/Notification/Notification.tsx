import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useToast, ToastPosition } from "@chakra-ui/react";
import store from "../../../store/store";

const Notification = observer(() => {
  const {
    auth: { notification, closeNotication },
  } = store;
  const toast = useToast();

  useEffect(() => {
    if (notification) {
      toast({
        title: notification.title,
        description: notification.message,
        status: notification.type,
        duration: 9000,
        isClosable: true,
        position: notification.placement
          ? (notification.placement as ToastPosition)
          : "top-right",
      });

      setTimeout(() => {
        closeNotication();
      }, 5000);
    }
  }, [notification, toast, closeNotication]);
  return null;
});

export default Notification;
