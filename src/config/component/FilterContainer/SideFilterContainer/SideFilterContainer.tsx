import { Box, Card, Heading } from "@chakra-ui/react";
import SearchCardInput from "../../SearchInput/SearchCardInput/SearchCardInput";
import CollapseSideFilter from "./CollapseSideFilter";

const SideFilterContainer = ({ category }: any) => {
  return (
    <Card p={3} maxHeight={"max-content"}>
      <SearchCardInput />
      <Box borderBottom="3px solid lightgray">
        <Heading fontSize="xl" mt={5} mb={3} fontWeight={600}>
          Categories
        </Heading>
      </Box>
      <Box mt={5}>
        <CollapseSideFilter data={category} maxShow={8} />
      </Box>
      <Box borderBottom="3px solid lightgray">
        <Heading fontSize="xl" mt={5} mb={3} fontWeight={600}>
          Prices
        </Heading>
      </Box>
      <Box mt={5}>
        <CollapseSideFilter
          data={[{ title: "All" }, { title: "Paid" }, { title: "Free" }]}
        />
      </Box>
    </Card>
  );
};

export default SideFilterContainer;
