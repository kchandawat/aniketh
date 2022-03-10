import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/font/matter/stylesheet.css";
const theme = extendTheme({
  colors: {
    brand: {
      50: "#fec409", //yellow
      100: "#e5e6ea", // dark mode white
      200: "#1a1b1f", //text - color
      300: "#5ab0e5", //dark mode blue text
      400: "#9ea6b4", //dark mode grey text
      500: "#fb7f09", //orange
      600: "#BF5709", //dark orange
      700: "#822f08", //brand dark orange
      800: "#230c0f", //brown siena
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
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
