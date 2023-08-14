import { Avatar, Box, Card, Heading } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import store from "../../../../../store/store";
import DisplayComment from "./element/DisplayComment";
import RichTextEditor from "../../../../../config/component/Editor/RichQuillEditor";
import { useState } from "react";
import { CardBoxShadow } from "../../../../../config/constant/variable";

const BlogCommentIndex = observer(({ item }: any) => {
  const [editorHtml, setEditorHtml] = useState("");
  console.log(item);
  const {
    BlogStore: {
      blogComments: { data },
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
        Total Comments ({data?.length})
      </Heading>
      <Box>
        <Box mt={8} display="flex" flexDirection={{base : "column", lg : "row"}}>
          <Avatar />
          <Card
            maxH={200}
            overflowY="auto"
            borderRadius={5}
            marginTop={{base : 3, lg:0}}
            marginLeft={{lg:5}}
            w={{sm : '100%',lg : '100%'}}
            boxShadow={CardBoxShadow}
            minH={200}
          >
            <RichTextEditor
              editorHtml={editorHtml}
              setEditorHtml={setEditorHtml}
            />
          </Card>
        </Box>
        {data.map((comment: any, index: number) => {
          return <DisplayComment comment={comment} key={index} />;
        })}
      </Box>
    </Box>
  );
});

export default BlogCommentIndex;