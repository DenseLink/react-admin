import { ChakraProvider } from "@chakra-ui/react";

import Header from "./Header";
import theme from "./theme";

const index = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
};

export default index;
