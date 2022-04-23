import React from "react";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Select,
  Switch,
} from "@chakra-ui/react";
import { useEditor } from "../../Hooks/EditorProvider";

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
        <Button colorScheme="whatsapp" textTransform="uppercase">
          {fill.includes("107.96%") ? "Gradient" : fill.substring(33, 40)}
        </Button>
      </FormControl>
    </Center>
  );
}
