import { useState } from "react";
import { Box, Card, Heading } from "@chakra-ui/react";
import SearchCardInput from "../../SearchInput/SearchCardInput/SearchCardInput";
import CollapseSideFilter from "./CollapseSideFilter";
import NormalLoader from "../../Loader/NormalLoader";

const SideFilterContainer = ({ category, loading, filtering }: any) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <Card p={3} maxHeight={"max-content"}>
      <SearchCardInput
        searchValue={searchValue}
        onChange={(e: any) => {
          setSearchValue(e.target.value);
          filtering(e.target.value);
        }}
      />
      <Box borderBottom="3px solid lightgray">
        <Heading fontSize="xl" mt={5} mb={3} fontWeight={600}>
          Categories
        </Heading>
      </Box>
      {loading && (
        <Box display={"flex"} justifyContent={"center"} mt={8}>
          <NormalLoader size="md" />
        </Box>
      )}
      <Box mt={5}>
        <CollapseSideFilter data={category} maxShow={4} />
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
