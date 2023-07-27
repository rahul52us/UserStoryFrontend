import { useState } from "react";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
// Correct imports
import "draft-js/dist/Draft.css"; // Import Draft.js styles
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"; // Import react-draft-wysiwyg styles


const AdvancedEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // Save the editor content to localStorage
  const saveContent = () => {
    const content = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    localStorage.setItem("editorContent", content);
  };

  // Load the editor content from localStorage
  const loadContent = () => {
    const content = localStorage.getItem("editorContent");
    if (content) {
      const rawContent = convertFromRaw(JSON.parse(content));
      setEditorState(EditorState.createWithContent(rawContent));
    }
  };

  return (
    <div>
      <div>
        <button onClick={saveContent}>Save Content</button>
        <button onClick={loadContent}>Load Content</button>
      </div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        toolbar={{
          options: [
            "inline",
            "blockType",
            "fontSize",
            "fontFamily",
            "list",
            "textAlign",
            "colorPicker",
            "link",
            "embedded",
            "emoji",
            "remove",
            "history",
          ],
          inline: {
            options: ["bold", "italic", "underline", "strikethrough", "monospace"],
          },
        }}
        editorClassName="editor"
      />
    </div>
  );
};

export default AdvancedEditor;
