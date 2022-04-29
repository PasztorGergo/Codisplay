import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: () => ({
      html: {
        w: "full",
      },
      body: {
        w: "full",
        bg: "#3b3a3f",
        mx: "auto",
      },
    }),
  },
});
