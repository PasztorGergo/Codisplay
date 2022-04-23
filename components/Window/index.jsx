import { Container, Input } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEditor } from "../../Hooks/EditorProvider";
import { CodeMirror } from "../CodeMirror";

export function Window() {
  const { title, setTitle, darkMode } = useEditor();
  return (
    <Container
      maxW="full"
      px="6"
      py="4"
      bg={darkMode ? "#000000da" : "whiteAlpha.900"}
      rounded="lg"
      transition="ease-in 200ms"
    >
      <Input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        display="block"
        mx="auto"
        w="44"
        variant="unstyled"
        textAlign="center"
        textColor={darkMode ? "gray.50" : "gray.900"}
        transition="ease-in 200ms"
      />
      <CodeMirror />
    </Container>
  );
}
