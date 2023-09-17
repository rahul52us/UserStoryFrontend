import { Flex, Heading, Spinner, Td, Tr } from "@chakra-ui/react";

interface TableLoaderProps {
  loader: boolean;
  show: number;
  children?: React.ReactNode;
}

const TableLoader: React.FC<TableLoaderProps> = ({ loader, show, children }) => {
  if (loader) {
    return (
      <Tr>
        <Td colSpan={10} p={5}>
          <Flex justifyContent="center">
            <Spinner />
          </Flex>
        </Td>
      </Tr>
    );
  }

  if (show === 0) {
    return (
      <Tr>
        <Td colSpan={10} p={5}>
          <Flex justifyContent="center">
            <Heading fontSize="lg" color="red.400" cursor="pointer">No Related Data are Found</Heading>
          </Flex>
        </Td>
      </Tr>
    );
  }

  return <>{children}</>;
};

export default TableLoader;
