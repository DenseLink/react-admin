import { ChakraProvider } from "@chakra-ui/react";

import Header from "../components/KanbanBoard/Header";
import theme from "../components/KanbanBoard/theme";

const index = (): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  );
};

export default index;
