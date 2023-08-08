import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, Button } from "@chakra-ui/react";

const RichTextEditor = ({editorHtml, setEditorHtml} : any) => {

  return (
    <Box>
          <ReactQuill
            theme="snow"
            value={editorHtml}
            onChange={setEditorHtml}
            modules={modules}
            formats={formats}
          />
      <Button mt="2" colorScheme="blue" size="xs" display="none">
      </Button>
    </Box>
  );
};

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    [{ align: [] }],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "bullet",
  "blockquote",
  "code-block",
  "align",
  "link",
  "image",
];

export default RichTextEditor;
