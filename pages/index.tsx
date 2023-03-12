import type React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/Global";

import TextEditor from "./texteditor";

const theme = {
  colors: {
    body: "#df278c",
    footer: "#003333",
    header: "#ebfbff",
  },
};

const Index = (): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles colors={theme.colors} />
        <p>hello world</p>
        <TextEditor />
      </>
    </ThemeProvider>
  );
};

export default Index;
