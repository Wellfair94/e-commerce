import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "theme";
import BasketProvider from "contexts/BasketContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <BasketProvider>
        <Component {...pageProps} />
      </BasketProvider>
    </ChakraProvider>
  );
}

export default MyApp;
