import React from "react";
import { useRadio, Box } from "@chakra-ui/react";
import { useEditor } from "../../Hooks/EditorProvider";

export function RadioCard(props) {
  const { darkMode } = useEditor();
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        transition="all ease-in 200ms"
        cursor="pointer"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: darkMode ? "whiteAlpha.300" : "blackAlpha.300",
          color: darkMode ? "white" : "black",
        }}
        px={2}
        py={1}
      >
        {props.children}
      </Box>
    </Box>
  );
}
