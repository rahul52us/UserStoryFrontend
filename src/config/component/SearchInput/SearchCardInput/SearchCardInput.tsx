import { Box, Input } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

const SearchCardInput = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      outline="2px solid lightgray"
      pr={3}
      mt={2}
      _hover={{
        outline: "2px solid blue",
        transition: "outline 0.8s ease-in-out",
      }}
      borderRadius={5}
    >
      <Input
        placeholder="Search Courses"
        borderWidth={0}
        color="gray.400"
        _hover={{ borderWidth: 0 }}
        _focus={{ borderColor: "white", boxShadow: "none" }}
        p={2}
        pl={4}
        variant="unstyled"
        pr={4}
      />
      <BiSearch cursor="pointer" color="gray" />
    </Box>
  );
};

export default SearchCardInput;
