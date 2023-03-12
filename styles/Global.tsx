import type { DefaultTheme } from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<DefaultTheme>`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

    * {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.colors.body};
    color: hsl(192, 100%, 9%);
    font-family: 'Times New Roman';
    font-size: 1.15em;
    margin: 0;
  }
  p {
    opacity: 0.6;
    line-height: 1.5;
  }
  img {
    max-width: 100%;
}
`;

export default GlobalStyles;
