import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import RichTextEditor from "../../../config/component/Editor/RichQuillEditor";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import store from "../../../store/store";

const BlogIndex = observer(() => {
  const [createLoading, setCreateLoading] = useState(false);
  const {
    BlogStore: { createBlog },
    auth: { openNotification },
  } = store;
  const [preViewContent, setpreViewContent] = useState(false);
  const [title, setTitle] = useState("");
  const [editorHtml, setEditorHtml] = useState("");

  const handlePreviewContent = () => {
    setpreViewContent(true);
  };

  const sendDataToBackend = () => {
    setCreateLoading(true);
    createBlog({ title: title, content: editorHtml })
      .then((data) => {
        openNotification({
          title: "CREATED SUCCESSFULLY",
          message: data.message,
        });
      })
      .catch((err: any) => {
        openNotification({
          title: "CREATE FAILED",
          message: err.message,
          type: "error",
        });
      })
      .finally(() => {
        setCreateLoading(false);
      });
  };

  return (
    <Box
      justifyContent="center"
      display="flex"
      bgColor="rgb(245, 245, 245)"
      height="100%"
      flex={1}
    >
      <Box width={{ base: "100%", lg: "80%" }} height="100%" m={3}>
        <Grid gridTemplateColumns={{ lg: "3fr 1fr" }} gap={10}>
          {/* Left Column */}
          <Box>
            <Flex justify="end" gap={5} mb={3}>
              <Button
                size="xs"
                bgColor="purple.300"
                onClick={handlePreviewContent}
              >
                Preview
              </Button>
              <Button size="xs" onClick={() => setpreViewContent(false)}>
                Edit
              </Button>
            </Flex>
            {preViewContent ? (
              <Box
                h="100%"
                bgColor="white"
                borderRadius={6}
                overflowY="auto"
                height="84vh"
                borderWidth={1}
                borderColor="gray.200"
                p={5}
              >
                <Text mb={4} fontSize="4xl" color="gray.600">
                  {title}
                </Text>
                <div className="preview_blog_container">
                  <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
                </div>
              </Box>
            ) : (
              <Box
                h="100%"
                bgColor="white"
                borderRadius={6}
                overflowY="auto"
                height="84vh"
                borderWidth={1}
                borderColor="gray.200"
              >
                <Button variant="outline" m={5}>
                  Add Cover Photo
                </Button>
                <Input
                  border="none"
                  boxShadow="none"
                  placeholder="Write Title here"
                  value={title}
                  _focus={{
                    boxShadow: "none",
                    borderColor: "transparent",
                  }}
                  _placeholder={{ fontSize: "4xl" }}
                  fontWeight="500"
                  mb={4}
                  fontSize="4xl"
                  color="gray.600"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <RichTextEditor
                  setEditorHtml={setEditorHtml}
                  editorHtml={editorHtml}
                />
              </Box>
            )}
            <Flex gap={5} mt={2}>
              <Button onClick={sendDataToBackend} isLoading={createLoading}>
                Publish
              </Button>
              <Button bgColor={"blue.400"}>Save as Draft</Button>
            </Flex>
          </Box>

          {/* Right Column */}
          <Box mt={20}>
            <Heading fontSize="2xl" mb={5} mt={20}>
              Writing a Great Post Title
            </Heading>
            <Text>
              Think of your post title as a super short (but compelling!)
              description — like an overview of the actual post in one short
              sentence. Use keywords where appropriate to help ensure people can
              find your post by search.
            </Text>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
});

export default BlogIndex;
