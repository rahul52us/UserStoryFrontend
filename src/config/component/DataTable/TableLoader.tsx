import { Flex, Spinner, Td, Tr } from "@chakra-ui/react";

const TableLoader = ({ loader }: any) => {
  return (
    loader &&
    <Tr>
      <Td colSpan={10}>
        <Flex justifyContent="center">
          <Spinner />
        </Flex>
      </Td>
    </Tr>
  );
};

export default TableLoader;
