import type React from "react";
import { ThemeProvider } from "styled-components";
import Global from "styles/Global";

import TextEditor from "./texteditor";

const theme = {
  colors: {
    body: "#fff",
    footer: "#003333",
    header: "#ebfbff",
  },
};

const Index = (): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global colors={theme.colors} />
        <p>hello world</p>;
        <TextEditor />;
      </>
    </ThemeProvider>
  );
};

export default Index;
