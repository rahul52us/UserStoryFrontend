import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import IconArrowImg from "../../../config/assets/icon_images/icon-arrow-img.svg";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";

const getRandomRotation = (index: number) => {
  const rotations = [45, 240, 270];
  return `rotate(${rotations[index]}deg)`;
};

const DashboardBanner = observer(() => {
  const {
    auth: { user },
  } = store;
  const fontSize = useBreakpointValue({
    xl: "3xl",
    lg: "xl",
    md: "lg",
    sm: "md",
    base: "base",
  });
  const isLargerThanXl = useBreakpointValue({ lg: true });

  return (
    <Box
      bgColor={useColorModeValue("rgb(199, 210, 254)", "#6366F1")}
      p={isLargerThanXl ? 6 : 2}
      mt={isLargerThanXl ? 1.2 : 1.5}
      borderRadius={5}
      mb={isLargerThanXl ? 5 : 3}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex direction="column">
          <Heading fontSize={fontSize}>Welcome , {user.name} 👋</Heading>
          <Text mt={2}>Here is what’s happening with your projects today:</Text>
        </Flex>
        {isLargerThanXl && (
          <Flex ml={5}>
            {[0, 1, 2].map((index) => (
              <Image
                key={index}
                src={IconArrowImg}
                alt=""
                w={70}
                h={70}
                ml={index === 0 ? 0 : 5}
                transform={getRandomRotation(index)}
                display="none"
              />
            ))}
          </Flex>
        )}
      </Flex>
    </Box>
  );
});

export default DashboardBanner;
