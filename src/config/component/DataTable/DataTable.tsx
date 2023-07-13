import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Input,
  Box,
  Flex,
  IconButton,
  Button,
} from '@chakra-ui/react';
import { BiSortDown, BiSortUp } from 'react-icons/bi';

interface Data {
  id: number;
  name: string;
  email: string;
  email1: string; // Add email1 property
  [key: string]: any; // Index signature
}

const DataTable: React.FC<{ data: Data[] }> = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email1.toLowerCase().includes(searchTerm.toLowerCase()) // Include email1 in filtering
  );

  const sortedData = filteredData.sort((a, b) => {
    const aValue = String(a[sortColumn] || '');
    const bValue = String(b[sortColumn] || '');
    return sortDirection === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
  });

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Table variant="striped" width="100%">
        <Thead position="sticky" top={0} bg="white">
          <Tr>
            <Th>
              <Flex align="center">
                <IconButton
                  icon={
                    sortColumn === 'id' ? (sortDirection === 'asc' ? <BiSortUp /> : <BiSortDown />) : undefined
                  }
                  onClick={() => handleSort('id')}
                  aria-label="Sort ID"
                  colorScheme="blue"
                  size="sm"
                  isRound
                  mx={1}
                />
                <Box as="span" fontWeight="bold">ID</Box>
              </Flex>
            </Th>
            <Th>
              <Flex align="center">
                <IconButton
                  icon={
                    sortColumn === 'name' ? (sortDirection === 'asc' ? <BiSortUp /> : <BiSortDown />) : undefined
                  }
                  onClick={() => handleSort('name')}
                  aria-label="Sort Name"
                  colorScheme="blue"
                  size="sm"
                  isRound
                  mx={1}
                />
                <Box as="span" fontWeight="bold">Name</Box>
              </Flex>
            </Th>
            <Th>
              <Flex align="center">
                <IconButton
                  icon={
                    sortColumn === 'email' ? (sortDirection === 'asc' ? <BiSortUp /> : <BiSortDown />) : undefined
                  }
                  onClick={() => handleSort('email')}
                  aria-label="Sort Email"
                  colorScheme="blue"
                  size="sm"
                  isRound
                  mx={1}
                />
                <Box as="span" fontWeight="bold">Email</Box>
              </Flex>
            </Th>
            <Th>
              <Flex align="center">
                <IconButton
                  icon={
                    sortColumn === 'email1' ? (sortDirection === 'asc' ? <BiSortUp /> : <BiSortDown />) : undefined
                  }
                  onClick={() => handleSort('email1')}
                  aria-label="Sort Email1"
                  colorScheme="blue"
                  size="sm"
                  isRound
                  mx={1}
                />
                <Box as="span" fontWeight="bold">Email1</Box>
              </Flex>
            </Th>
          </Tr>
          <Tr>
            <Th colSpan={4}>
              <Flex align="center">
                <Input
                  placeholder="Search"
                  size="sm"
                  width="100%"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <Button ml={2}>Apply Filter</Button>
              </Flex>
            </Th>
          </Tr>
        </Thead>
      </Table>
      <Box maxHeight="400px" overflowY="auto">
        <Table variant="striped" width="100%">
          <Tbody>
            {sortedData.map((item) => (
              <Tr key={item.id}>
                <Td>{item.id}</Td>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.email1}</Td> {/* Render email1 data */}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default DataTable;
