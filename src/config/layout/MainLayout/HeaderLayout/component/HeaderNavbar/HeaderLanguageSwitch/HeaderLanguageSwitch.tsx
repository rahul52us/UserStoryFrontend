import {  IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";

const HeaderLanguageSwitch = () => {
  const { i18n } = useTranslation();

  // Define language options
  const languageOptions = [
    { value: "en", label: "English" },
    { value: "hi", label: "Hindi" },
    // Add more languages as needed
  ];

  // Handle language change
  const handleLanguageChange = (value: any) => {
    const selectedLanguage = value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("setLanguage", selectedLanguage);
  };

  return (
    <Menu closeOnSelect={false} placement="bottom-end">
      <MenuButton
        as={IconButton}
        icon={<FiGlobe />}
        variant="ghost"
        aria-label="Switch Language"
        fontSize="xl"
        _hover={{ opacity: 0.8 }}
      />
      <MenuList
        bg="white"
        minWidth="180px"
        boxShadow="md"
        py={1}
        borderRadius="md"
        zIndex={10}
      >
        {languageOptions.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            onClick={() => handleLanguageChange(option.value)}
            _hover={{ bg: "gray.100" }}
            px={4}
            py={2}
          >
            <Text fontSize="sm" fontWeight="medium">
              {option.label}
            </Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default HeaderLanguageSwitch;
