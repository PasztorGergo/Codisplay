import React, { useState, useReducer } from "react";
import { Button, Icon, Stack, StackDivider } from "@chakra-ui/react";
import { FaFileDownload, FaImage, FaVectorSquare } from "react-icons/fa";
import { useExport } from "../../Hooks/ExportProvider";
import domtoimage from "dom-to-image";
import { useEditor } from "../../Hooks/EditorProvider";

export function ExportButton() {
  const [showDropDown, setShow] = useState(false);

  const { imgRef } = useExport();
  const [isLoading, setLoading] = useState(false);
  const { title, background } = useEditor();

  async function exportPng() {
    setLoading(true);
    const download = document.createElement("a");
    download.setAttribute(
      "href",
      await domtoimage.toPng(
        imgRef.current,
        !background && { style: { background: "transparent" } }
      )
    );
    download.setAttribute("download", title || "untitled");
    download.click();

    setLoading(false);
  }
  async function exportSvg() {
    setLoading(true);
    const download = document.createElement("a");
    download.setAttribute(
      "href",
      await domtoimage.toSvg(
        imgRef.current,
        !background && { style: { background: "transparent" } }
      )
    );
    download.setAttribute("download", title || "untitled");
    download.click();

    setLoading(false);
  }
  return (
    <>
      <Button
        disabled={isLoading}
        mt="8"
        colorScheme="red"
        color="red.200"
        _focus={{ outlineColor: "#f00a", transition: "all ease-in 100ms" }}
        onClick={() => setShow((prev) => !prev)}
      >
        <Icon as={FaFileDownload} />
        Export
      </Button>
      {showDropDown && (
        <Stack rowGap="0.25rem" pos="absolute" onClick={() => setShow(false)}>
          <Button colorScheme="red" onClick={exportPng}>
            Export as PNG
            <Icon as={FaImage} />
          </Button>
          <Button colorScheme="red" onClick={exportSvg}>
            Export as SVG
            <Icon as={FaVectorSquare} />
          </Button>
        </Stack>
      )}
    </>
  );
}
