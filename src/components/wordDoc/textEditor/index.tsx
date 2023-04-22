import "quill/dist/quill.snow.css";

import dynamic from "next/dynamic";

import { TextBody } from "./textEditorStyles";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  loading: () => <p>Loading ...</p>,
  ssr: false,
});

const TextEditor = (): JSX.Element => {
  return (
    <TextBody>
      <QuillNoSSRWrapper theme="snow" />
    </TextBody>
  );
};

export default TextEditor;
