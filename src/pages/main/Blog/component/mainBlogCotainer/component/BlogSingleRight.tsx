import {  Card, Flex, Heading } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

const BlogSingleRight = observer(() => {



  return (
    <Flex justifyContent="center" mb={10}>
      <Card w={{base : '95%', lg : '90%'}} h={400}>
        <Heading fontSize="sm">Here will other details</Heading>
      </Card>
    </Flex>
  );
});

export default BlogSingleRight;