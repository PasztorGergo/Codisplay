import { ChakraProvider } from "@chakra-ui/react";
import EditorProvider from "../Hooks/EditorProvider";
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <EditorProvider>
        <Component {...pageProps} />
      </EditorProvider>
    </ChakraProvider>
  );
}

export default MyApp;
