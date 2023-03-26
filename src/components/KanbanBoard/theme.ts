import { extendTheme, theme } from "@chakra-ui/react";

const colors = {
  "card-bg": "#242731",

  "card-border": "#2D313E",
  "column-bg": "#16181D",

  "column-header-bg": "#1A1D23",
  "main-bg": "#0E1012",

  "subtle-text": "#9B9B9B",
  "white-text": "#E8E8EA",
};

const fonts = {
  body: "Poppins",
  heading: "Poppins",
};

export default extendTheme({
  ...theme,
  colors,
  fonts,
});
