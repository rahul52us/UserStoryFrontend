import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Button,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface DashTableProps {
  headers: Array<any>;
  rowData: Array<any>;
  title:string;
  createNew:string;
  loading?: boolean;
  deleteAction?: (data: any) => void;
}

const ExampleTable = ({
  headers,
  rowData,
  loading,
  title,
  createNew,
  deleteAction,
}: DashTableProps) => {
  const tableHeadingColor = useColorModeValue(
    "blackAlpha.200",
    "blackAlpha.800"
  );
  const tdHeight = "40px"; // Set your desired height here

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p={4}
      overflowX="auto"
      boxShadow={"0 0 5px rgba(0, 0, 0, 0.2)"}
    >
      <Flex
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Heading ml={2} fontSize="md">
          {title}
        </Heading>
        <Button fontSize="xs">{createNew}</Button>
      </Flex>
      {loading ? (
        <Center>
          <Spinner size="lg" />
        </Center>
      ) : (
        <Table
          variant="simple"
          minWidth="max-content"
          overflowX="scroll"
          fontSize="small"
        >
          <Thead bgColor={tableHeadingColor}>
            <Tr textAlign="center">
              {headers.map((header, index) => {
                return (
                  <Th key={index} textAlign="center">
                    {header}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {rowData.map((item, index) => (
              <Tr key={index}>
                {headers.map((header, headerIndex) => {
                  if (header === "action") {
                    return (
                      <Td key={headerIndex} h={tdHeight}>
                        <Flex>
                          <Box mr={2} color="blue.500" cursor="pointer">
                            <FaEdit />
                          </Box>
                          <Box
                            color="red.500"
                            cursor="pointer"
                            onClick={deleteAction?.bind(null, item)}
                          >
                            <FaTrash />
                          </Box>
                        </Flex>
                      </Td>
                    );
                  } else {
                    return (
                      <Td
                        key={headerIndex}
                        h={5}
                        p={0}
                        pl={5}
                        textAlign="center"
                      >
                        {item[header]}
                      </Td>
                    );
                  }
                })}
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Box>
  );
};

export default ExampleTable;
