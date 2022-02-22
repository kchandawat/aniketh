import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/font/matter/stylesheet.css";
const theme = extendTheme({
  colors: {
    brand: {
      50: "#fec409", //yellow
      200: "#1a1b1f", //text - color
      500: "#fb7f09", //orange
      600: "#BF5709", //dark orange
      700: "#822f08", //brand dark orange
      800: "#230c0f", //brown siena
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
