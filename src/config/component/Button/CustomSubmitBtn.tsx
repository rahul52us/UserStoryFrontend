import { Box, Button } from "@chakra-ui/react";

interface CustomSubmitBtnI {
    loading?: boolean;
    buttonSubmitText?: string;
    type?: any;
    subDisabled?: boolean;
    onClick?: any;
  }
const CustomSubmitBtn = ({
    loading,
    buttonSubmitText,
    type,
    subDisabled,
    onClick,
  }: CustomSubmitBtnI) => {
    return (
      <Box>
        <Button
          isLoading={loading}
          type={type ? type : "submit"}
          disabled={subDisabled}
          onClick={() => {
            if (onClick) {
              onClick();
            }
          }}
        >
          {buttonSubmitText ? buttonSubmitText : "Submit"}
        </Button>
      </Box>
    );
  };

export default CustomSubmitBtn;
