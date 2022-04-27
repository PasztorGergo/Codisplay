import React from "react";
import { ConsoleWrapper } from "../ConsoleWrapper";
import { EditorPanel } from "../EditorPanel";
import { Stack } from "@chakra-ui/react";
import { ExportProvider } from "../../Hooks/ExportProvider";

export function EditorWrapper() {
  return (
    <ExportProvider>
      <Stack className="EditorWrapper" rowGap="3rem" px="16">
        <EditorPanel />
        <ConsoleWrapper />
      </Stack>
    </ExportProvider>
  );
}
