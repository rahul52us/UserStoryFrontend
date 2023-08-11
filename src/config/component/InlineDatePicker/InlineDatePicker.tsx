import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./InlineDatePicker.css";
import { Box, Center, Flex } from "@chakra-ui/react";

const InlineDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <Flex
      p={4}
      direction="column"
      align="center"
      borderRadius="md"
      boxShadow="md"
    >
      <Center mb={4}>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          dateFormat="MMMM d, yyyy"
          customInput={<InputBox />}
        />
      </Center>
    </Flex>
  );
};

const InputBox = React.forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <Box
      ref={ref}
      w="full"
      py={2}
      px={4}
      borderRadius="md"
      _hover={{ borderColor: "gray.400" }}
      _focus={{ borderColor: "blue.500", boxShadow: "outline" }}
      border="none"
      {...props}
    />
  );
});

export default InlineDatePicker;
