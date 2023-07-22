import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

interface LinkProps {
  text: string;
  icon?: any;
  clickEvent?: any;
  color?: string;
  hoverColor?: string;
}

const LinkText = ({ text, icon, clickEvent, color, hoverColor }: LinkProps) => {
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
      _hover={{
        color: hoverColor ? hoverColor : "blue.400",
        transition: "background-color 0.2s ease",
      }}
      onClick={() => {
        if (clickEvent) {
          clickEvent();
        }
      }}
      color={color && color}
      maxWidth={"max-content"}
    >
      <Box display="flex" alignItems="center">
        {icon}
        <Text ml={icon ? 2 : 0} fontWeight={500}>
          {text}
        </Text>
        <Box
          position="absolute"
          bottom={0}
          left={0}
          width={isHovered ? "100%" : 0}
          height="2px"
          backgroundColor={hoverColor ? hoverColor : "blue.400"}
          transition="width 0.2s ease"
        />
      </Box>
    </Box>
  );
};

export default LinkText;
