import "quill/dist/quill.snow.css";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";

import { TextEditorWrapper } from "./textEditorStyles";

const ReactQuill = dynamic(import("react-quill"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});

const TextEditor = (): JSX.Element => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  return (
    <TextEditorWrapper>
      <ReactQuill onChange={handleChange} value={value} />
    </TextEditorWrapper>
  );
};

export default TextEditor;
