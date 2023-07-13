import {
Flex,
IconButton,
Menu,
MenuButton,
MenuItem,
MenuList,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { FiGlobe } from "react-icons/fi";

const HeaderLanguageSwitch = observer(() => {
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
        as={Flex}
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        _hover={{ opacity: 0.8 }}
        fontSize="xl"
    >
        <IconButton
        icon={<FiGlobe />}
        variant="ghost"
        aria-label="Switch Language"
        fontSize="xl"
        />
    </MenuButton>
    <MenuList
        bg="white"
        minWidth="180px"
        boxShadow="md"
        py={1}
        borderRadius="md"
    >
        {languageOptions.map((option) => (
        <MenuItem
            key={option.value}
            value={option.value}
            onClick={() => handleLanguageChange(option.value)}
            _hover={{ bg: "gray.100" }}
        >
            {option.label}
        </MenuItem>
        ))}
    </MenuList>
    </Menu>
);
});
export default HeaderLanguageSwitch;
