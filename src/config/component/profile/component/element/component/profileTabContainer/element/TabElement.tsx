import { Box, Text } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useNavigate, useParams } from "react-router-dom";

const TabElement = observer(({ Icon, title, path, type }: any) => {
  const navigate = useNavigate();
  const { profileTab } = useParams();
  return (
    <Box
      display="flex"
      alignItems="center"
      mt={5}
      color={profileTab === path ? "#ff6575" : "#685f78"}
      _hover={{ color: "#ff6575", transition: "200ms ease-in" }}
      cursor="pointer"
      onClick={() => navigate(`/${type}/${path}`)}
    >
      {Icon}
      <Text ml={3} fontSize="sm" fontWeight="500">
        {title}
      </Text>
    </Box>
  );
});

export default TabElement;