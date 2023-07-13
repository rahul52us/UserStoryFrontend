import { useTranslation } from "react-i18next";
import { Select } from "@chakra-ui/react";

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
    localStorage.setItem('setLanguage',selectedLanguage)
  };

  return (
    <Select
      value={i18n.language}
      onChange={handleLanguageChange}
      maxWidth="200px"
    >
      {languageOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
};

export default LanguageSwitcher;
