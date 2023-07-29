import { Button } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import CustomInput from "../../../../config/component/CustomInput/CustomInput";
import { Box, Grid, Heading } from "@chakra-ui/layout";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";

const ContactForm = observer(() => {
  const { t } = useTranslation();
  return (
    <Box
      border="1px solid"
      borderColor="gray.300"
      rounded={10}
      p={{ base: 6, md: "8 10" }}
    >
      <Grid gap={3}>
        <Heading fontSize="3xl">{t("contact.contact_form_title")}</Heading>
        <Grid templateColumns={{ md: "1fr 1fr" }} gap={6}>
          <CustomInput
            placeholder="Enter First Name"
            label="First Name"
            name="firstName"
            required
          />
          <CustomInput
            placeholder="Enter Last Name"
            label="Last Name"
            name="lastName"
            required
          />
        </Grid>
        <CustomInput
          placeholder="Enter User Name"
          label="User Name"
          name="userName"
          required
        />
        <CustomInput type="phone" label="Phone Number" name="phone" />
        <CustomInput
          type="textarea"
          label="Description"
          placeholder="Description"
          name="description"
        />
        <Button
          h={{ base: "45px", md: "56px" }}
          bg={useColorModeValue("blue.500", "white")}
          color={useColorModeValue("white", "blue.500")}
          fontSize={{ md: "lg" }}
          transition=".3s ease-in-out"
          _hover={{
            transform: "scale(.9)",
          }}
        >
          Submit
        </Button>
      </Grid>
    </Box>
  );
});

export default ContactForm;
