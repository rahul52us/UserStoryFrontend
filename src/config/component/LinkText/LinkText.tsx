import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

interface LinkProps {
  text: string;
  icon?: any;
}

const LinkText = ({ text, icon }: LinkProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      cursor="pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      position="relative"
    >
      <Box position="relative" display="flex" alignItems="center">
        {icon}
        <Text ml={2} fontWeight={500}>
          {text}
        </Text>
        <Box
          position="absolute"
          bottom={0}
          left={0}
          width={isHovered ? "100%" : 0}
          height="2px"
          color="blue.400"
          backgroundColor="currentColor"
          transition="width 0.2s ease"
        />
      </Box>
    </Box>
  );
};

export default LinkText;
