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
  useBreakpointValue,
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

  const flexShrink = useBreakpointValue({ base: "0.5", md: "1" });
  const flexWrap = useBreakpointValue({ base: "wrap", md: "nowrap" });
  const centerH = useBreakpointValue({ base: "full", md: "28" });
  const formWidth = useBreakpointValue({ base: "50%", md: "100%" });
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
        h={centerH}
        bg={darkMode ? "gray.900" : "gray.100"}
        textColor={darkMode ? "gray.100" : "gray.900"}
        rounded="xl"
        transition="all 200ms ease-in"
        transitionDelay="100ms"
        flexWrap={flexWrap}
        py="4"
        rowGap=".7rem"
      >
        <FormControl
          display="flex"
          alignItems="center"
          flexDirection="column"
          flexShrink={flexShrink}
          w={formWidth}
        >
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
        <FormControl
          display="flex"
          alignItems="center"
          flexDirection="column"
          flexShrink={flexShrink}
          w={formWidth}
        >
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
        <FormControl
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          <FormLabel htmlFor="">Padding</FormLabel>
          <HStack>
            <RadioCard {...getRadioProps({ value: "4" })}>16</RadioCard>
            <RadioCard {...getRadioProps({ value: "8" })}>32</RadioCard>
            <RadioCard {...getRadioProps({ value: "16" })}>64</RadioCard>
            <RadioCard {...getRadioProps({ value: "32" })}>128</RadioCard>
          </HStack>
        </FormControl>
        <FormControl
          display="flex"
          alignItems="center"
          flexDirection="column"
          w={formWidth}
        >
          <FormLabel htmlFor="">Language</FormLabel>
          <Select
            maxW="fit-content"
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
        <FormControl
          display="flex"
          alignItems="center"
          flexDirection="column"
          w={formWidth}
        >
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
        <FormControl
          display="flex"
          justifyContent="center"
          flexDir="column"
          px="4"
          pos="relative"
        >
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
