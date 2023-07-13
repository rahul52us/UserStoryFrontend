import { Box, Image } from "@chakra-ui/react";
import styled from "styled-components";
import { AiOutlinePlayCircle } from "react-icons/ai";

const VideoWrapper = styled(Box)`
  position: relative;
  width: "30rem";
  height: "20rem";
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
`;

const VideoThumbnail = styled(Image)`
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
  z-index: 9;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  ${VideoWrapper}:hover & {
    opacity: 1;
  }
`;

const PlayIcon = styled(AiOutlinePlayCircle)`
  color: #fff;
  font-size: 2rem;
`;

const YoutubeVideoIndex = ({ openVideoModal, videoId }: any) => {
  return (
    <VideoWrapper onClick={() => openVideoModal(videoId)}>
      <VideoThumbnail
        src={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`}
        alt="Video Thumbnail"
      />
      <PlayButton>
        <PlayIcon />
      </PlayButton>
    </VideoWrapper>
  );
};

export default YoutubeVideoIndex;
