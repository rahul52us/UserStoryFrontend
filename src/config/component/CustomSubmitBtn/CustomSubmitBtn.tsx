import { Box, Button } from "@chakra-ui/react";

interface CustomBtnI {
  loading: boolean;
}

const CustomSubmitBtn = ({ loading }: CustomBtnI) => {
  return (
    <Box mt={3}>
      <Button>Cancel</Button>
      <Button type="submit" isLoading={loading}>
        Submit
      </Button>
    </Box>
  );
};

export default CustomSubmitBtn;
