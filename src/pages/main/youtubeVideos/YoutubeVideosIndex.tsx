import { useState } from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
} from "@chakra-ui/react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import YoutubeVideoPlayer from "../../../config/component/YoutubeVideoPlayer/YoutubeVideoPlayer";

const IframeContainer = styled(Box)`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
`;

const IframeWrapper = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -1.5rem;
  right: -1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: transparent;
  background: white;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;}
`;

const YoutubeVideoIndex = () => {
  const [selectedVideo, setSelectedVideo] = useState("");

  const openVideoModal = (videoId: any) => {
    setSelectedVideo(videoId);
  };

  const closeVideoModal = () => {
    setSelectedVideo("");
  };

  const videos : string[] = [
    'XGgQaB-TbaM',
    "hi0301FRL3g",
    "3heVqPjpEww",
    "ULVfS6SkvlY",
    "B7wsylEjIjQ",

  ]

  return (
    <Box p={5}>
      <Flex justifyContent="center" gap={8} flexWrap="wrap">
        {videos.map((item) => (
          <Box key={item}>
            <YoutubeVideoPlayer
              openVideoModal={openVideoModal}
              videoId={item}
            />
          </Box>
        ))}
        </Flex>
      {selectedVideo && (
        <Modal isOpen onClose={closeVideoModal} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalBody p={0}>
              <IframeContainer>
                <IframeWrapper>
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo}`}
                    title="YouTube Video"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                  />
                </IframeWrapper>
              </IframeContainer>
            </ModalBody>
            <CloseButton onClick={closeVideoModal}>
              <AiOutlineClose size={20} />
            </CloseButton>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default YoutubeVideoIndex;
