import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { BiBookmark, BiComment } from "react-icons/bi";
import HeartLike from "../../../../../../config/assets/icon_images/heart-like.svg";
import UnicornLike from "../../../../../../config/assets/icon_images/unicorn-like.svg";
import HandLike from "../../../../../../config/assets/icon_images/hand-like.svg";
import ShockLike from "../../../../../../config/assets/icon_images/shock-like.svg";
import FireLike from "../../../../../../config/assets/icon_images/fire-like.svg";

const BlogReaction = observer(({ item, multi }: any) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" mt={5} pr={5}>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        gap={{ base: 0, lg: 3 }}
      >
        <Box
          display="flex"
          alignItems="center"
          p={1}
          pl={3}
          pr={3}
          borderRadius={5}
          cursor="pointer"
          color={"gray.600"}
          _hover={{ backgroundColor: "gray.200" }}
        >
          <Box borderRadius="50%" p={0.8} ml={-2}>
            <Image src={HeartLike} alt="" />
          </Box>
          <Box borderRadius="50%" p={0.7} ml={-2}>
            <Image src={FireLike} alt="" />
          </Box>
          <Box borderRadius="50%" p={0.7} ml={-2}>
            <Image src={UnicornLike} alt="" />
          </Box>
          <Box borderRadius="50%" p={0.7} ml={-2}>
            <Image src={HandLike} alt="" />
          </Box>
          <Box borderRadius="50%" p={0.7} ml={-2}>
            <Image src={ShockLike} alt="" />
          </Box>
          <Text ml={2} fontSize="sm">
            {item?.reactions} Reactions
          </Text>
        </Box>
        {multi && (
          <Box
            display="flex"
            alignItems="center"
            p={1}
            pl={3}
            pr={3}
            borderRadius={5}
            cursor="pointer"
            fontSize="sm"
            color={"gray.600"}
          _hover={{ backgroundColor: "gray.200" }}
          >
            <BiComment fontSize="sm" style={{ marginTop: "4px" }} />
            <Text ml={2} fontSize="sm">
              {item?.comments} Comments
            </Text>
          </Box>
        )}
      </Flex>
      <Box cursor="pointer">
        <BiBookmark title="bookmark" />
      </Box>
    </Flex>
  );
});

export default BlogReaction;