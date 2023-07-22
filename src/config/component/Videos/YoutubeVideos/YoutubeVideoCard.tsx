import { useState } from "react";
import {
	Box,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
	Image,
	Card,
	Heading,
	Flex,
	useColorModeValue,
	Text,
} from "@chakra-ui/react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import StarRatingIcon from "../../StarRatingIcon/StarRatingIcon";

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
	border-radius: 2px;
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

const YoutubeVideoCard = ({ link }: any) => {
	const bookmarkColor = useColorModeValue("gray.600", "gray.500");
	const [selectedVideo, setSelectedVideo] = useState("");

	const openVideoModal = (videoId: string) => {
		setSelectedVideo(videoId);
	};

	const closeVideoModal = () => {
		setSelectedVideo("");
	};

	return (
		<>
			<Card p={2}>
				<VideoWrapper onClick={() => openVideoModal(link)}>
					<VideoThumbnail
						src={`https://i.ytimg.com/vi/${link}/mqdefault.jpg`}
						alt="Video Thumbnail"
					/>
					<PlayButton>
						<PlayIcon />
					</PlayButton>
				</VideoWrapper>
				<Flex mt={5} justifyContent={"space-between"} alignItems={"center"}>
					<StarRatingIcon rating={3} />
					<BiBookBookmark
						cursor="pointer"
						color={bookmarkColor}
						title="Bookmark"
					/>
				</Flex>
				<Flex mt={3} justifyContent={"space-between"} alignItems={"center"}>
					<Heading
						fontSize={"lg"}
						cursor={"pointer"}
						color={bookmarkColor}
						_hover={{ color: "blue" }}
						transition={"0.5s ease-in-out"}
					>
						React Front To Back
					</Heading>
				</Flex>
				<Text textAlign="start" mt={4} mb={1} color="gray.500" fontSize={14}>
					This is description for the videos why is it good for us and it is
					neccessary for our future
				</Text>
			</Card>
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
		</>
	);
};

export default YoutubeVideoCard;