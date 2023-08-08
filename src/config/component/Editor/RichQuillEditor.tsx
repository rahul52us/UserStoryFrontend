import  { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const RichTextEditor = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  const togglePreview = () => {
    setPreviewMode(!previewMode);
  };

  return (
    <Box p="4">
      <FormControl>
        <FormLabel>Editor</FormLabel>
        <ReactQuill
          theme="snow"
          value={editorHtml}
          onChange={setEditorHtml}
          modules={modules}
          formats={formats}
        />
      </FormControl>
      <Button
        mt="2"
        colorScheme="blue"
        onClick={togglePreview}
        size="lg"
      >
        {previewMode ? "Edit" : "Preview"}
      </Button>
      {previewMode ? (
        <Box mt="4" p="2" border="1px solid" borderColor="gray.300">
          <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
        </Box>
      ) : null}
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
