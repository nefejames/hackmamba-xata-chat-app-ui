import { ChakraProvider } from "@chakra-ui/react";
import Wrapper from "@layout/index";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    </ChakraProvider>
  );
}

export default MyApp;
