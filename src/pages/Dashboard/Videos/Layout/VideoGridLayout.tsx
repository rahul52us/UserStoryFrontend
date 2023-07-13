import { useState } from "react";
import {
  Grid,
  GridItem,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Image,
} from "@chakra-ui/react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";

const VideoWrapper = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
`;

const VideoThumbnail = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const PlayIcon = styled(AiOutlinePlayCircle)`
  color: #fff;
  font-size: 2rem;
`;

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
  right: -1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const videos: string[] = [
  "XGgQaB-TbaM",
  "hi0301FRL3g",
  "3heVqPjpEww",
  "ULVfS6SkvlY",
  "B7wsylEjIjQ",
  "XGgQaB-TbaM",
  "hi0301FRL3g",
  "3heVqPjpEww",
  "ULVfS6SkvlY",
  "B7wsylEjIjQ",
  "jPo2DhrFkVM"
];

const YoutubeVideoIndex = () => {
  const [selectedVideo, setSelectedVideo] = useState("");

  const openVideoModal = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const closeVideoModal = () => {
    setSelectedVideo("");
  };

  return (
    <Box p={5}>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {videos.map((item, index) => (
          <GridItem key={index}>
            <VideoWrapper onClick={() => openVideoModal(item)}>
              <VideoThumbnail
                src={`https://i.ytimg.com/vi/${item}/mqdefault.jpg`}
                alt="Video Thumbnail"
              />
              <PlayButton>
                <PlayIcon />
              </PlayButton>
            </VideoWrapper>
          </GridItem>
        ))}
      </Grid>

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
