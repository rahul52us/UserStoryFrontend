import { useState, useEffect } from "react";
import { Box, Text, Flex, Icon } from "@chakra-ui/react";
import { FiUsers } from "react-icons/fi";

const WidgetCard = ({
  totalCount,
  title,
}: {
  totalCount: number;
  title: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < totalCount) {
        setCount(count + 1);
      }
    },5);

    return () => clearInterval(interval);
  }, [count, totalCount]);

  return (
    <Box
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="lg"
      p={6}
      bgGradient="linear(to-r, #58a6ff, #1b8fff)"
      boxShadow="md"
      _hover={{ transform: "scale(1.05)" }}
      cursor="pointer"
      transition="transform 0.2s"
      color="white"
      textAlign="center"
    >
      <Flex align="center" justify="center" mb={4}>
        <Icon as={FiUsers} boxSize={8} mr={2} />
        <Text fontSize="3xl" fontWeight="bold">
          {count}
        </Text>
      </Flex>
      <Text fontSize="lg" fontWeight="medium">
        {title}
      </Text>
    </Box>
  );
};

export default WidgetCard;