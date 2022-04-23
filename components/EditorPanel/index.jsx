import React, { useState, useEffect } from "react";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Select,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { useEditor } from "../../Hooks/EditorProvider";
import { TwitterPicker } from "react-color";

export function EditorPanel() {
  const {
    background,
    setBackground,
    darkMode,
    setDarkMode,
    fill,
    setFill,
    language,
    setLanguage,
  } = useEditor();
  const [startColor, setStartColor] = useState(fill.substring(33, 40));
  const [endColor, setEndColor] = useState(fill.substring(50, 57));
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    setFill(
      `linear-gradient(to bottom right, ${startColor} -13.07%, ${endColor} 107.96%)`
    );
  }, [startColor, endColor]);
  return (
    <Center
      className="EditorPanel"
      h="28"
      bg={darkMode ? "gray.900" : "gray.100"}
      textColor={darkMode ? "gray.100" : "gray.900"}
      rounded="xl"
      transition="all 200ms ease-in"
      transitionDelay="100ms"
    >
      <FormControl display="flex" alignItems="center" flexDirection="column">
        <FormLabel htmlFor="backgroundSwitch">Background</FormLabel>
        <Switch
          id="backgroundSwitch"
          defaultChecked={background}
          colorScheme="whatsapp"
          onChange={(e) => {
            setBackground(e.target.checked);
          }}
        />
      </FormControl>
      <FormControl display="flex" alignItems="center" flexDirection="column">
        <FormLabel htmlFor="darkmodeSwitch">Dark mode</FormLabel>
        <Switch
          id="darkmodeSwitch"
          colorScheme="whatsapp"
          onChange={(e) => {
            setDarkMode(e.target.checked);
          }}
        />
      </FormControl>
      <FormControl display="flex" alignItems="center" flexDirection="column">
        <FormLabel htmlFor="">Language</FormLabel>
        <Select
          variant="outline"
          borderColor="gray.500"
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
        >
          <option style={{ color: "black" }} value="javascript">
            Javascript
          </option>
          <option style={{ color: "black" }} value="xml">
            HTML
          </option>
          <option style={{ color: "black" }} value="css">
            CSS
          </option>
        </Select>
      </FormControl>
      <FormControl display="flex" alignItems="center" flexDirection="column">
        <FormLabel htmlFor="">Fill Color</FormLabel>
        <Button
          colorScheme="whatsapp"
          textTransform="uppercase"
          onClick={() => setOpen((prev) => !prev)}
        >
          {fill.includes("107.96%") ? "Gradient" : fill.substring(33, 40)}
        </Button>
        {isOpen && (
          <Stack
            rowGap="0.5rem"
            pos="absolute"
            top="110%"
            left="0"
            zIndex="dropdown"
          >
            <TwitterPicker
              triangle="hide"
              color={startColor}
              onChangeComplete={(color) => setStartColor(color.hex)}
            />
            <TwitterPicker
              triangle="hide"
              color={endColor}
              onChangeComplete={(color) => setEndColor(color.hex)}
            />
          </Stack>
        )}
      </FormControl>
    </Center>
  );
}
