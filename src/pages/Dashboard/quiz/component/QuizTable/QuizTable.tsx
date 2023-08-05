import { observer } from "mobx-react-lite"
import store from "../../../../../store/store"
import { toJS } from "mobx"
import {
  Box,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import SearchCardInput from "../../../../../config/component/SearchInput/SearchCardInput/SearchCardInput";
import CustomInput from "../../../../../config/component/CustomInput/CustomInput";
import { useState } from "react";

const QuizTable = observer(() => {
  const {
    quiz: {
      dashQuiz: { data },
    },
  } = store;

  console.log(toJS(data));

  // date
  const [date, setDate] = useState({
    startYear: undefined,
    endYear: undefined,
  });

  return (
    <Box
      boxShadow="rgb(0 0 0 / 12%) 0px 0px 11px"
      rounded={8}
      p="1.125rem 1.375rem"
      // bg="white"
      mt={8}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Heading fontSize={"xl"} fontWeight={700} color="blue.500">
          QuizTable
        </Heading>
        <Flex gap={6}>
          <Box width="10rem">
            <CustomInput
              type="date"
              placeholder="Start Year"
              value={date.startYear}
              name="date"
              onChange={(e: any) => setDate({ ...date, startYear: e })}
            />
          </Box>
          <Box w="10rem">
            <CustomInput
              type="date"
              placeholder="End Year"
              value={date.endYear}
              name="date"
              minDate={date.startYear}
              onChange={(e: any) => setDate({ ...date, endYear: e })}
            />
          </Box>
          <Box w="18rem">
            <SearchCardInput />
          </Box>
        </Flex>
      </Flex>
      <Box
        position="relative"
        overflow="auto hidden"
        className="customScrollBar"
      >
        <Table className="customTable" variant="striped" mt="1rem">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Name</Th>
              <Th>Name</Th>
              <Th>Name</Th>
              <Th>Name</Th>
              <Th>Name</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>sadasdfsdlkjasdflkjasdasdlfkj</Td>
              <Td>sadasdfsdl</Td>
              <Td>sadasdfsdlkjasdflkjasdasdlfkj</Td>
              <Td>sadasdfsdlkjasdflkjasdasdlfkj</Td>
              <Td>sadasdfsdlkjasdflkjasdasdlfkj</Td>
              <Td>sadasdfsdlkjasdflkjasdasdlfkj</Td>
              <Td>sadasdfsdlkjasdflkjasdasdlfkj</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
});

export default QuizTable