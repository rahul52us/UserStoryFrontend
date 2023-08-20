import { Box, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useLocation, useNavigate } from "react-router-dom";

const TabElement = observer(({ Icon, title, path, editTabLink }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const profileTab = new URLSearchParams(location.search).get("profileTab");

  const isActive = profileTab === path;

  return (
    <Box
      display="flex"
      alignItems="center"
      py={2}
      pl={4}
      borderRadius="md"
      color={isActive ? "white" : "gray.600"}
      bg={isActive ? "brand.500" : "transparent"}
      _hover={{ bg: isActive ? "brand.600" : "gray.100", transition: "200ms ease-in" }}
      cursor={editTabLink ? "pointer" : "default"}
      onClick={() => {
        if (editTabLink) {
          navigate(`${editTabLink}&profileTab=${path}`);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }}
    >
      <Box>{Icon}</Box>
      <Text ml={3} fontSize="sm" fontWeight="500">
        {title}
      </Text>
    </Box>
  );
});

export default TabElement;
