import React from "react";
import { ConsoleWrapper } from "../ConsoleWrapper";
import { EditorPanel } from "../EditorPanel";
import { Stack } from "@chakra-ui/react";

export function EditorWrapper() {
  return (
    <Stack className="EditorWrapper" rowGap="3rem">
      <EditorPanel />
      <ConsoleWrapper />
    </Stack>
  );
}
