import { ChakraProvider } from "@chakra-ui/react";
import EditorProvider from "../Hooks/EditorProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <EditorProvider>
        <Component {...pageProps} />
      </EditorProvider>
    </ChakraProvider>
  );
}

export default MyApp;
