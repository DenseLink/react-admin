import type React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: top;
  height: 100vh;
`;

const TextArea = styled.textarea`
  font-size: 16px;
  width: 80%;
  height: 300px;
  border: none;
  outline: none;
  padding: 10px;
  font-family: Arial, sans-serif;
  background-color: #2688ca;
  align-items: center;
`;

const Button = styled.button`
  background-color: #f1f1f1;
  border: none;
  color: black;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    background-color: #ddd;
  }
`;

const TextEditor: React.FC = () => {
  const [text, setText] = useState<string>("");

  const handleBold = (): void => {
    setText((prevText) => `<b>${prevText}</b>`);
  };

  const handleItalic = (): void => {
    setText((prevText) => `<i>${prevText}</i>`);
  };

  const handleUnderline = (): void => {
    setText((prevText) => `<u>${prevText}</u>`);
  };

  return (
    <>
      <div>
        <Button onClick={handleBold}>Bold</Button>
        <Button onClick={handleItalic}>Italic</Button>
        <Button onClick={handleUnderline}>Underline</Button>
      </div>
      <Container>
        <TextArea onChange={(e) => setText(e.target.value)} value={text} />
      </Container>
    </>
  );
};

export default TextEditor;
