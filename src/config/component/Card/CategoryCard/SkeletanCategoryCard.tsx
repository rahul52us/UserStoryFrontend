import { useState } from "react";
import { Box, Card, Flex, Heading, Text } from "@chakra-ui/react";

const SkeletanCategoryCard = () => {
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
      <Box
        h="220px"
        borderRadius="5px"
        backgroundColor="gray.300"
        animation="pulse 1.5s infinite"
      />

      <Flex mt={5} justify="space-between" alignItems="center">
        <Box
          w="60px"
          h="15px"
          backgroundColor="gray.300"
          borderRadius="5px"
          animation="pulse 1.5s infinite"
        />

        <Box
          w="30px"
          h="30px"
          backgroundColor="gray.300"
          borderRadius="50%"
          animation="pulse 1.5s infinite"
        />
      </Flex>

      <Heading size="sm" mb={1} mt={1}>
        <Box
          w="200px"
          h="20px"
          backgroundColor="gray.300"
          borderRadius="5px"
          animation="pulse 1.5s infinite"
        />
      </Heading>

      <Flex mt={2} justify="space-between" alignItems="center">
        <Text color="gray" fontSize="sm" display="flex" alignItems="center">
          <Box
            w="50px"
            h="10px"
            backgroundColor="gray.300"
            borderRadius="5px"
            animation="pulse 1.5s infinite"
          />
        </Text>
        <Text color="gray" fontSize="sm" display="flex" alignItems="center">
          <Box
            w="70px"
            h="10px"
            backgroundColor="gray.300"
            borderRadius="5px"
          />
        </Text>
      </Flex>

      <Text textAlign="start" mt={4} mb={1} color="gray.500" fontSize={14}>
        <Box w="100%" h="60px" backgroundColor="gray.300" borderRadius="5px" />
      </Text>

      <Flex mt={3} alignItems="center">
        <Box w="40px" h="40px" backgroundColor="gray.300" borderRadius="50%" />
        <Text ml={3} color="gray.500" size="sm" fontWeight="bold"></Text>
        <Box
          w="80px"
          h="15px"
          ml={2}
          backgroundColor="gray.300"
          borderRadius="5px"
        />
      </Flex>

      <Flex mt={4} justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center" gap={4}>
          <Box
            w="40px"
            h="20px"
            backgroundColor="gray.300"
            borderRadius="5px"
          />{" "}
          <Box
            w="40px"
            h="20px"
            backgroundColor="gray.300"
            borderRadius="5px"
          />
        </Box>
        {/* Skeleton Cart Icon */}
        <Box w="30px" h="30px" backgroundColor="gray.300" borderRadius="50%" />
      </Flex>
    </Card>
  );
};

export default SkeletanCategoryCard;
