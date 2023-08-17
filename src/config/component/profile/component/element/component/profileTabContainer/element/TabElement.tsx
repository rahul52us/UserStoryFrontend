import { Box, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useLocation, useNavigate } from "react-router-dom";

const TabElement = observer(({ Icon, title, path, editTabLink }: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  const profileTab = new URLSearchParams(location.search).get("profileTab");

  return (
    <Box
      display="flex"
      alignItems="center"
      mt={5}
      color={profileTab === path ? "#ff6575" : "#685f78"}
      _hover={{ color: "#ff6575", transition: "200ms ease-in" }}
      cursor="pointer"
      onClick={() => {
        if (editTabLink) {
          navigate(`${editTabLink}&profileTab=${path}`);
        }
      }}
    >
      {Icon}
      <Text ml={3} fontSize="sm" fontWeight="500">
        {title}
      </Text>
    </Box>
  );
});

export default TabElement;