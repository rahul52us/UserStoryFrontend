import { Box, Spinner } from "@chakra-ui/react";

const Loader = ({ height }: any) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={height ? height : "100vh"}
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Box>
  );
};

export default Loader;
