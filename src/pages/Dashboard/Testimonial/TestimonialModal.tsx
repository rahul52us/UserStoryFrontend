    import { Divider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Spinner, Text } from "@chakra-ui/react";

    function TestimonialModal({ open, close, loading, title , children }: any) {
        const OverlayOne = () => (
            <ModalOverlay
              bg="blackAlpha.300"
              backdropFilter="blur(10px) hue-rotate(90deg)"
            >
              {loading && (
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                />
              )}
            </ModalOverlay>
          );

      return (
        <>
          <Modal isCentered size={'2xl'} isOpen={open} onClose={close}>
            {open && <OverlayOne />}
            <ModalContent>
              <ModalHeader>
                <Text color={'gray.600'}>{title}</Text>
                </ModalHeader>
                <ModalCloseButton mt={2}/>
              <Divider />
              <ModalBody>
                {children}
              </ModalBody>
              <Divider />
            </ModalContent>
          </Modal>
        </>
      );
    }

    export default TestimonialModal;
