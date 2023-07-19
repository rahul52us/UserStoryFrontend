import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import SearchCheckLabel from "../../SearchInput/CheckInputLabel/CheckInputLabel";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const CollapseSideFilter = ({ data, maxShow = 8 }: any) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreToggle = () => {
    setShowMore(!showMore);
  };

  const displayedCategories = data.slice(0, maxShow);
  const hasMoreCategories = data.length > maxShow;

  return (
    <>
      <Box>
        {displayedCategories.map((item: any, index: number) => (
          <SearchCheckLabel labelText={item.title} total={10} key={index} />
        ))}
      </Box>

      <Box
        style={{
          maxHeight: showMore ? "1000px" : "0",
          opacity: showMore ? 1 : 0.5,
          overflow: "hidden",
          transition: "max-height 1s ease-in-out, opacity 1s ease-in-out",
        }}
      >
        {showMore &&
          data
            .slice(maxShow)
            .map((item: any, index: number) => (
              <SearchCheckLabel labelText={item.title} total={10} key={index} />
            ))}
      </Box>

      {hasMoreCategories && (
        <Flex
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          onClick={handleShowMoreToggle}
          cursor={"pointer"}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "blue",
              cursor: "pointer",
              border: "none",
              background: "none",
            }}
            fontSize={"small"}
          >
            {showMore ? "Show Less" : "Show More"}
          </Text>
          <Box>
            {showMore ? (
              <BiChevronDown color="blue" />
            ) : (
              <BiChevronUp color="blue" />
            )}
          </Box>
        </Flex>
      )}
    </>
  );
};

export default CollapseSideFilter;
