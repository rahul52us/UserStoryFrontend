import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface DeleteModelPara {
  id: string;
  open: boolean;
  close: () => void;
  title: string;
  content: string;
  submit?: (id: string) => void;
  loading?: boolean;
  setLoading?: () => void;
  closeLabel?: string;
  DeleteLabel?: string;
}

const DeleteModel = ({
  id,
  open,
  close,
  title,
  content,
  closeLabel,
  DeleteLabel,
  submit,
}: DeleteModelPara) => {
  return (
    <>
      <Modal isOpen={open} onClose={close} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{content}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              mr={2}
              fontWeight={"700"}
              onClick={submit?.bind(null, id)}
            >
              <Text as={"h6"}>{DeleteLabel ? DeleteLabel : "Delete"}</Text>
            </Button>
            <Button colorScheme="blue" mr={3} onClick={close}>
              <Text as={"h6"} fontWeight={"700"}>
                {closeLabel ? closeLabel : "Close"}
              </Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteModel;
