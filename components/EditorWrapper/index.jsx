import React from "react";
import { ConsoleWrapper } from "../ConsoleWrapper";
import { EditorPanel } from "../EditorPanel";
import { Stack, useBreakpointValue } from "@chakra-ui/react";
import { ExportProvider } from "../../Hooks/ExportProvider";

export function EditorWrapper() {
  return (
    <ExportProvider>
      <Stack className="EditorWrapper" rowGap="3rem" px="8" mt="10">
        <EditorPanel />
        <ConsoleWrapper />
      </Stack>
    </ExportProvider>
  );
}
