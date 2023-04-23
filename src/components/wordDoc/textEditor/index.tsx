import "quill/dist/quill.snow.css";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import styled from "styled-components";

const ReactQuill = dynamic(import("react-quill"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});

const TextEditor = (): JSX.Element => {
  const [value, setValue] = useState("");

  const handleChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  return (
    <TextEditorWrapper>
      <ReactQuill onChange={handleChange} value={value} />
    </TextEditorWrapper>
  );
};

const TextEditorWrapper = styled.div`
  .quill {
    background-color: #f3f3f3;
    margin: 0;
  }

  .ql-container {
    width: 2.5in;
    min-height: 11in;
    padding: 11in;
    margin: 1rem;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    background-color: white;
  }
`;

export default TextEditor;
