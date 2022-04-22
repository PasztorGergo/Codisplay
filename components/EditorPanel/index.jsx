import React from "react";
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  Select,
  Switch,
} from "@chakra-ui/react";

export function EditorPanel() {
  return (
    <Center className="EditorPanel" h="28" bg="#efefef" rounded="xl">
      <FormControl display="flex" alignItems="center" flexDirection="column">
        <FormLabel htmlFor="backgroundSwitch">Background</FormLabel>
        <Switch id="backgroundSwitch" defaultChecked colorScheme="whatsapp" />
      </FormControl>
      <FormControl display="flex" alignItems="center" flexDirection="column">
        <FormLabel htmlFor="darkmodeSwitch">Dark mode</FormLabel>
        <Switch id="darkmodeSwitch" colorScheme="whatsapp" />
      </FormControl>
      <FormControl display="flex" alignItems="center" flexDirection="column">
        <FormLabel htmlFor="">Language</FormLabel>
        <Select>
          <option value="javascript">Javascript</option>
          <option value="xml">HTML</option>
          <option value="css">CSS</option>
        </Select>
      </FormControl>
      <FormControl display="flex" alignItems="center" flexDirection="column">
        <FormLabel htmlFor="">Fill Color</FormLabel>
        <Button colorScheme="whatsapp">Fill</Button>
      </FormControl>
    </Center>
  );
}
