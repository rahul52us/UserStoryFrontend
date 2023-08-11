import { Box, Text } from "@chakra-ui/react";

const TabElement = ({Icon, title} : any ) => {
  return (
    <Box display="flex" alignItems="center" mt={5} color="#685f78" _hover={{color:"#ff6575", transition:'200ms ease-in'}} cursor="pointer">
      {Icon}
      <Text ml={3} fontSize="sm" fontWeight="500">{title}</Text>
    </Box>
  );
};

export default TabElement;