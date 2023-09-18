import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import store from "../../../../../store/store";
import DisplayComment from "./element/DisplayComment";
import { useState } from "react";
import CreateComment from "./element/CreateComment";

const BlogCommentIndex = observer(({ item }: any) => {
  const [editorHtml, setEditorHtml] = useState("");

  const {
    BlogStore: {
      blogComments: { data, totalComments, currentPage, TotalPages },
      getComments
    },
  } = store;

  return (
    <Box m={{ base: 1, lg: 5 }} p={{ base: 1, lg: 5 }} mt={2}>
      <Heading
        fontSize="2xl"
        cursor="pointer"
        maxW="max-content"
        _hover={{
          color: "blue.500",
          textDecoration: "underline",
          cursor: "pointer",
          transition: "500ms",
        }}
      >
        Total Comments ({totalComments})
      </Heading>
      <Box mb={5}>
        <CreateComment
          editorHtml={editorHtml}
          setEditorHtml={setEditorHtml}
          blogItem={item}
        />
      </Box>
      {data.map((comment: any, index: number) => {
        return <DisplayComment comment={comment} key={index} />;
      })}
      {TotalPages > currentPage ? (
        <Flex justify="center" mt={5}>
          <Button onClick={() => getComments(item._id, currentPage + 1)}>Load More</Button>
        </Flex>
      ) : null}
    </Box>
  );
});

export default BlogCommentIndex;
