import { Box, Text } from "@chakra-ui/react";

const Card = ({ text } : any) => {
  return (
    <Box p={2} bg="white" boxShadow="md" borderRadius="md">
      <Text>{text}</Text>
    </Box>
  );
};

export default Card;
