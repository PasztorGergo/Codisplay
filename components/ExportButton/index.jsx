import React, { useState } from "react";
import { Button, Icon, Stack, StackDivider } from "@chakra-ui/react";
import {
  FaFileDownload,
  FaImage,
  FaVectorSquare,
  FaPaperclip,
  FaFileImage,
} from "react-icons/fa";
import { useExport } from "../../Hooks/ExportProvider";
import domtoimage from "dom-to-image";
import { useEditor } from "../../Hooks/EditorProvider";

export function ExportButton() {
  const [showDropDown, setShow] = useState(false);
  const { imgRef } = useExport();
  const [isLoading, setLoading] = useState();
  const { title } = useEditor();

  async function exportScreenshot() {
    setLoading(true);
    const imgHref = await domtoimage.toPng(imgRef.current);
    const download = document.createElement("a");
    download.setAttribute("href", imgHref);
    download.setAttribute("download", title || "untitled");
    download.click();
    setLoading(false);
  }
  return (
    <React.Fragment
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Button
        disabled={isLoading}
        mt="8"
        colorScheme="red"
        color="red.200"
        _focus={{ outlineColor: "#f00a", transition: "all ease-in 100ms" }}
        onClick={exportScreenshot}
      >
        <Icon as={FaFileDownload} />
        Export
      </Button>
      {showDropDown && (
        <Stack rowGap="0.25rem" pos="absolute">
          <Button colorScheme="red">
            Export as PNG
            <Icon as={FaImage} />
          </Button>
          <StackDivider />
          <Button colorScheme="red">
            Export as SVG
            <Icon as={FaVectorSquare} />
          </Button>
          <StackDivider />
          <Button colorScheme="red">
            Copy URL
            <Icon as={FaPaperclip} />
          </Button>
          <StackDivider />
          <Button colorScheme="red">
            Copy Image
            <Icon as={FaFileImage} />
          </Button>
        </Stack>
      )}
    </React.Fragment>
  );
}
