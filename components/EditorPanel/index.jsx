import React, { useState, useEffect } from "react";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Select,
  Stack,
  Switch,
  Box,
  useRadioGroup,
  HStack,
} from "@chakra-ui/react";
import { useEditor } from "../../Hooks/EditorProvider";
import { TwitterPicker } from "react-color";
import { ColorPicker } from "../ColorPicker";
import { RadioCard } from "../RadioCard";
import { ExportButton } from "../ExportButton";

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
    setPadding,
    padding,
  } = useEditor();

  const [isOpen, setOpen] = useState(false);

  const { getRootProps, getRadioProps, setValue } = useRadioGroup({
    name: "padding",
    defaultValue: padding,
    onChange: (e) => setPadding(e),
  });

  return (
    <>
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
            defaultChecked={darkMode}
            id="darkmodeSwitch"
            colorScheme="whatsapp"
            onChange={(e) => {
              setDarkMode(e.target.checked);
              localStorage.setItem("darkMode", e.target.checked);
            }}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="">Padding</FormLabel>
          <HStack>
            <RadioCard {...getRadioProps({ value: "4" })}>16</RadioCard>
            <RadioCard {...getRadioProps({ value: "8" })}>32</RadioCard>
            <RadioCard {...getRadioProps({ value: "16" })}>64</RadioCard>
            <RadioCard {...getRadioProps({ value: "32" })}>128</RadioCard>
          </HStack>
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
            {localStorage.getItem("startColor") ==
            localStorage.getItem("endColor")
              ? fill.substring(33, 40)
              : "Gradient"}
          </Button>
          {isOpen && <ColorPicker />}
        </FormControl>
        <FormControl>
          <ExportButton />
        </FormControl>
      </Center>
      {isOpen && (
        <Box
          pos="absolute"
          width="100%"
          left="0"
          h="full"
          appearance="none"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
