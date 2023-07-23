import { useState } from "react";
import {
  Avatar,
  Box,
  Card,
  Flex,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { BiBookContent, BiBookmark, BiCart, BiUser } from "react-icons/bi";
import StarRatingIcon from "../../StarRatingIcon/StarRatingIcon";
import LinkText from "../../LinkText/LinkText";

const CategoryCard = ({
  thumbnail,
  title,
  description,
  username,
  userPic,
  discountPrice,
  originalPrice,
  rating,
  totalCount,
}: any) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Card
      p={5}
      borderRadius={5}
      cursor={isHovered ? "pointer" : "default"}
      boxShadow={isHovered ? "lg" : "base"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition="box-shadow 0.3s ease"
    >
      <Image
        src={thumbnail}
        backgroundColor="gray.300"
        alt=""
        borderRadius={5}
        minH={220}
        height="100%"
        width="100%"
        objectFit="contain"
        maxH={{ md: "320", lg: 220 }}
      />
      <Flex mt={5} justify="space-between" alignItems="center">
        <StarRatingIcon rating={rating} size="1rem" color="gold" />
        <IconButton
          icon={<BiBookmark />}
          aria-label="Bookmark"
          borderRadius={20}
          title="Bookmark"
        />
      </Flex>

      <Heading size="sm" mb={1} mt={1}>
        {title}
      </Heading>

      <Flex mt={2} justify="space-between" alignItems="center">
        <Text color="gray" fontSize="sm" display="flex" alignItems="center">
          <BiBookContent style={{ marginRight: "10px" }} color="gray" />{" "}
          {totalCount} Lessons
        </Text>
        <Text color="gray" fontSize="sm" display="flex" alignItems="center">
          <BiUser style={{ marginRight: "10px" }} color="gray" /> Students
        </Text>
      </Flex>

      <Text textAlign="start" mt={4} mb={1} color="gray.500" fontSize={14}>
        {description}
      </Text>

      <Flex mt={3} alignItems="center">
        <Avatar
          src={userPic}
          style={{
            width: "40px",
            height: "40px",
            objectFit: "cover",
            padding: "1px",
            border: "2px solid #2f57ef21",
          }}
          name={username}
          borderRadius="100%"
        />
        <Text ml={3} color="gray.500" size="sm" fontWeight="bold">
          By
        </Text>
        <Text fontSize="sm" ml={2} fontWeight="bold">
          {username}
        </Text>
      </Flex>

      <Flex mt={4} justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Text fontSize="lg" fontWeight="bold" color="gray.600">
            {originalPrice ? `$ ${originalPrice}` : "Available for All"}
          </Text>
          <Text
            fontSize="lg"
            fontWeight="bold"
            color="gray.500"
            ml={2}
            textDecor="line-through"
          >
            {discountPrice && `$ ${discountPrice}`}
          </Text>
        </Box>
        <LinkText icon={<BiCart />} text="Add To Cart" />
      </Flex>
    </Card>
  );
};

export default CategoryCard;
