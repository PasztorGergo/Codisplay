import { Box, Container } from "@chakra-ui/react";
import React from "react";
import { useEditor } from "../../Hooks/EditorProvider";
import { Window } from "../Window";

export function ConsoleWrapper() {
  const { background, fill } = useEditor();
  return (
    <Container
      className="ConsoleWrapper"
      display="flex"
      alignItems="center"
      justifyContent="center"
      alignSelf="center"
    >
      <Box
        className="background"
        bgGradient={
          background
            ? fill
            : "linear-gradient(45deg,#1d1d1d 25%,transparent 0),linear-gradient(-45deg,#1d1d1d 25%,transparent 0),linear-gradient(45deg,transparent 75%,#1d1d1d 0),linear-gradient(-45deg,transparent 75%,#1d1d1d 0)"
        }
        bgSize={!background && "20px 20px"}
        bgPosition={!background && "0 0,0 10px,10px -10px,-10px 0"}
        w="full"
        px="8"
        py="6"
      >
        <Window />
      </Box>
    </Container>
  );
}
