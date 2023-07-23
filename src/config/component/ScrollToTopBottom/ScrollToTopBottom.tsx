import { useState, useEffect } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show/hide the button based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300); // Change 300 to the desired scroll position when the button should appear
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
      behavior: "smooth", // For smooth scrolling, you can remove this if you prefer instant scrolling
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
      visibility={isVisible ? "visible" : "hidden"} // Show/hide the button based on the visibility state
      opacity={isVisible ? 1 : 0} // Fade in/out the button based on the visibility state
      transition="opacity 0.3s, visibility 0.3s" // Add a smooth transition when showing/hiding the button
      borderRadius="50%" // Make the button circular
      boxShadow="md" // Add a subtle shadow to the button
      _hover={{ backgroundColor: "teal.500" }} // Change the background color on hover
      _active={{ backgroundColor: "teal.600" }} // Change the background color on click
    />
  );
};

export default ScrollToTopButton;
