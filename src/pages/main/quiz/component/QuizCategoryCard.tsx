import { useState } from "react";
import { Box, Card, Heading, Image, Text } from "@chakra-ui/react";
import LinkText from "../../../../config/component/LinkText/LinkText";

const QuizCategoryCard = ({ item, onChange }: any) => {
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
        src={item.thumbnail}
        backgroundColor="gray.300"
        alt=""
        borderRadius={5}
        minH={220}
        height="100%"
        width="100%"
        objectFit="contain"
        maxH={{ md: "320", lg: 220 }}
      />

      <Heading size="sm" mt={5}>
        <LinkText
          text={item.title}
          clickEvent={() => {
            onChange(item)
          }}
        />
      </Heading>

      <Text
        textAlign="start"
        mt={4}
        mb={1}
        color="gray.500"
        fontSize={14}
        maxH={30}
        minH={30}
      >
        {item.description?.slice(0, 80)}{" "}
        {item.description?.length > 80 && "..."}
      </Text>

      <Box mt={5}>
        <Text fontWeight="bold">Categories {item?.category?.length}</Text>
      </Box>
    </Card>
  );
};

export default QuizCategoryCard;
