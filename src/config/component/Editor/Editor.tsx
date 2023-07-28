import { Editor } from "react-draft-wysiwyg";
import { Box } from "@chakra-ui/react";
import "draft-js/dist/Draft.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AdvancedEditor = ({ editorState, setEditorState }: any) => {

  return (
    <div>
      <Box boxShadow="lg" borderRadius="md" p={4}>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "colorPicker",
              "fontSize",
              "fontFamily",
              "list",
              "textAlign",
              "link",
              "embedded",
              "emoji",
              "remove",
              "history",
            ],
            inline: {
              options: [
                "bold",
                "italic",
                "underline",
                "strikethrough",
                "monospace",
              ],
            },
          }}
          editorClassName="editor"
          editorStyle={{ maxHeight: "200px",minHeight:'200px' }}
          placeholder="Write Your details"
          toolbarStyle={{ color: "red" }}
        />
      </Box>
    </div>
  );
};

export default AdvancedEditor;
