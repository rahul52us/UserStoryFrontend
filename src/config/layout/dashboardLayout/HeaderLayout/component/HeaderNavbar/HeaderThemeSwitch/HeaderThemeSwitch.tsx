import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { BiMoon, BiSun } from "react-icons/bi";

const HeaderThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isDarkMode, setIsDarkMode] = React.useState(colorMode === "dark");

  const toggleMode = () => {
    toggleColorMode();
    setIsDarkMode(!isDarkMode);
  };
  return (
    <IconButton
      icon={isDarkMode ? <BiSun /> : <BiMoon />}
      onClick={toggleMode}
      variant="ghost"
      fontSize="xl"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    />
  );
};

export default HeaderThemeSwitch;
