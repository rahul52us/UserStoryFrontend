import { Box, Button, Collapse, Flex, Input } from "@chakra-ui/react";
import { BiFilter, BiSearch } from "react-icons/bi";
import { useState } from "react";

const FilterContainer = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <Box width="100%">
      <Flex justifyContent="end">
        <Box
          display="flex"
          alignItems="center"
          borderRadius={30}
          borderColor="white"
          borderWidth={2}
          pr={5}
          _hover={{ borderColor: "white" }}
          _focus={{ borderColor: "white", boxShadow: "none" }}
        >
          <Input
            name="search"
            placeholder="Search Your Course"
            borderWidth={0}
            color="white"
            _hover={{ borderWidth: 0 }}
            _placeholder={{ color: "white" }}
            _focus={{ borderColor: "white", boxShadow: "none" }}
            p={2}
            pl={4}
            variant="unstyled"
            pr={4}
          />
          <BiSearch color="white" cursor="pointer" size={20} />
        </Box>
        <Button
          ml={5}
          leftIcon={<BiFilter />}
          borderRadius={20}
          p={5}
          onClick={handleFilterToggle}
        >
          {" "}
          Filter
        </Button>
      </Flex>
      <Collapse in={isFilterOpen} animateOpacity style={{marginTop:'10px'}}>
        <Box p={4} mt={2} borderRadius="md" width="100%" borderTop={'1px solid skyblue'}>
          <Box>Filter Option 1</Box>
          <Box>Filter Option 2</Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default FilterContainer;
