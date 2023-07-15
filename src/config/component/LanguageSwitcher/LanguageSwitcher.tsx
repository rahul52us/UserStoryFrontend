import { useTranslation } from "react-i18next";
import { Select, Box } from "@chakra-ui/react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Define language options
  const languageOptions = [
    { value: "en", label: "English" },
    { value: "hi", label: "Hindi" },
    // Add more languages as needed
  ];

  // Handle language change
  const handleLanguageChange = (e: any) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("setLanguage", selectedLanguage);
  };

  return (
    <Box>
      <Select
        value={i18n.language}
        onChange={handleLanguageChange}
        maxWidth="200px"
        variant="filled"
        colorScheme="teal"
      >
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default LanguageSwitcher;
