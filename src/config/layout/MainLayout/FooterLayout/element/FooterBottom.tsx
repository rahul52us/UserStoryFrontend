import {
  Box,
  Divider,
  Flex,
  Grid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import LinkText from "../../../../component/LinkText/LinkText";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { authentication } from "../../../../constant/routes";

const FooterBottom = observer(() => {
  const navigate = useNavigate()
  return (
    <Box mt={5}>
      <Divider />
      <Grid templateColumns={{ base: "1fr", md: "1.5fr 1fr" }} pt={5} pb={5}>
        <Box
          display={"flex"}
          justifyContent={{ base: "center", md: "flex-start" }}
          alignItems={"center"}
          cursor={"pointer"}
          fontSize={{ base: 12, sm: 14 }}
        >
          <Text mr={1} color={useColorModeValue("gray.500", "gray.300")}>
            Copyright © 2023
          </Text>
          <LinkText text="Rainbow-Themes ." />
          <Text ml={1.5} color={useColorModeValue("gray.500", "gray.300")}>
            All Rights Reserved
          </Text>
        </Box>
        <Flex
          display={"flex"}
          justifyContent={"space-around"}
          flexFlow={"wrap"}
          mt={{ base: 4, sm: 4, md: 0 }}
          fontSize={{ base: 12, sm: 14 }}
        >
          <LinkText text="Terms Of Condition" />
          <LinkText text="Privacy Policy" />
          <LinkText text="Subscription" />
          <LinkText text="Login & Register" clickEvent={() => {navigate(authentication.login)}} />
        </Flex>
      </Grid>
    </Box>
  );
});

export default FooterBottom;
