import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import ArrowIconImg from "../../assets/icon_images/icon-arrow-img.svg";
import { BiDotsHorizontal } from "react-icons/bi";

const WidgetCard = () => {
  return (
    <Card boxShadow={'0 0 5px rgba(0, 0, 0, 0.2)'}>
      <CardHeader>
        <Flex display="flex" justifyContent="space-between">
          <img
            src={ArrowIconImg}
            alt="img not found"
            style={{ filter: "brightness(50%)", fill: "green" }}
          />
          <BiDotsHorizontal fontSize={24} cursor={"pointer"} />
        </Flex>
        <Text fontSize={"xl"} fontWeight={500} mt={3}>
          Title
        </Text>
        <Text
          fontSize={"10px"}
          color={useColorModeValue("gray.500", "gray.300")}
        >
          subTitle
        </Text>
        <Flex display="flex" alignItems={"center"} gap={2} mt={2}>
          <Text fontSize={20} fontWeight={700}>
            $24,780
          </Text>
          <Badge
            mt={-5}
            px={1.5}
            py={1}
            borderRadius={15}
            fontSize={"x-small"}
            fontWeight={800}
            bgColor={"red"}
            color={"white"}
          >
            45+ %
          </Badge>
        </Flex>
      </CardHeader>
      <CardBody></CardBody>
    </Card>
  );
};

export default WidgetCard;


