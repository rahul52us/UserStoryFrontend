import { useState } from "react";
import { Avatar, Box, Button, Card, Flex, Text } from "@chakra-ui/react";
import RichTextEditor from "../../../../../../config/component/Editor/RichQuillEditor";
import { CardBoxShadow } from "../../../../../../config/constant/variable";
import store from "../../../../../../store/store";

const CreateComment = ({ editorHtml, setEditorHtml, blogItem }: any) => {
  const [loading, setLoading] = useState(false);
  const {
    BlogStore: { createComment },
    auth: { openNotification, user },
  } = store;

  const createCommentFun = () => {
    setLoading(true);
    createComment({
      content: editorHtml,
      parentComment: null,
      blogId: blogItem._id,
    })
      .then(() => {
        setEditorHtml(null);
      })
      .catch((err: any) => {
        openNotification({
          title: "Failed to Create Comment",
          message: err.message,
          type: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box mt={5}>
      <Flex alignItems="center">
        <Avatar src={user?.src} aria-label="" name={user?.name} size="sm" />
        <Box display="flex" fontSize="sm" gap={1} ml={2}>
          <Text fontWeight={700}>Comment as</Text>
          <Text color="gray.600" fontWeight={600}>
            {user?.name}
          </Text>
        </Box>
      </Flex>
      <Card
        maxH={200}
        overflowY="auto"
        borderRadius={5}
        marginTop={{ base: 3, lg: 3 }}
        marginBottom={{ base: 3, lg: 4 }}
        w={{ sm: "100%", lg: "100%" }}
        boxShadow={CardBoxShadow}
        minH={200}
      >
        <RichTextEditor editorHtml={editorHtml} setEditorHtml={setEditorHtml} />
      </Card>
      <Flex justifyContent="end">
        <Box>
          <Button
            mr={3}
            onClick={() => createCommentFun()}
            isDisabled={!editorHtml}
            isLoading={loading}
          >
            Submit
          </Button>
          <Button onClick={() => setEditorHtml(null)}>Cancel</Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default CreateComment;
