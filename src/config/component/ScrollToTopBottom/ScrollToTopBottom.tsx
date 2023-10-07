import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";
import { observer } from "mobx-react-lite";

const ScrollToTopButton = observer(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      className="scroll-to-top-btn"
      icon={<FaArrowUp />}
      onClick={scrollToTop}
      position="fixed"
      bottom="20px"
      right="20px"
      size="md"
      colorScheme="teal"
      aria-label="Scroll to top"
      visibility={isVisible ? "visible" : "hidden"}
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.3s, visibility 0.3s"
      borderRadius="50%"
      boxShadow="md"
      _hover={{ backgroundColor: "teal.500" }}
      _active={{ backgroundColor: "teal.600" }}
    />
  );
});

export default ScrollToTopButton;
