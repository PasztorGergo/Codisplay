import { FormControl, FormLabel, Icon, Select, Stack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { TwitterPicker } from "react-color";
import { useEditor } from "../../Hooks/EditorProvider";

export function ColorPicker() {
  const { fill, setFill, darkMode } = useEditor();
  const [startColor, setStartColor] = useState(
    localStorage.getItem("startColor") || fill.substring(33, 40)
  );
  const [endColor, setEndColor] = useState(
    localStorage.getItem("endColor") || fill.substring(50, 57)
  );
  const [fillMode, setFillMode] = useState(
    localStorage.getItem("fillMode") || "gradient"
  );

  useEffect(() => {
    localStorage.setItem("fillMode", fillMode);
    localStorage.setItem("startColor", startColor);
    localStorage.setItem("endColor", endColor);
    setFill(
      `linear-gradient(to bottom right, ${startColor} -13.07%, ${endColor} 107.96%)`
    );
  }, [startColor, endColor, fill]);
  return (
    <Stack
      pos="absolute"
      top="150%"
      zIndex="dropdown"
      bg={darkMode ? "gray.900" : "gray.100"}
      px="6"
      py="4"
      rounded="lg"
    >
      <FormControl>
        <FormLabel htmlFor="fillMode"></FormLabel>
        <Select
          value={fillMode || localStorage.getItem("fillMode")}
          id="fillMode"
          onChange={(e) => {
            setFillMode(e.target.value);
            console.log(fillMode);
          }}
        >
          <option style={{ color: "black" }} value="solid">
            Solid
          </option>
          <option style={{ color: "black" }} value="gradient">
            Gradient
          </option>
          <option style={{ color: "black" }} value="image">
            Image
          </option>
        </Select>
      </FormControl>
      {fillMode == "gradient" ? (
        <Stack>
          <h5>Start Color</h5>
          <TwitterPicker
            triangle="hide"
            color={startColor}
            onChangeComplete={(color) => setStartColor(color.hex)}
          />
          <h5>End Color</h5>
          <TwitterPicker
            triangle="hide"
            color={endColor}
            onChangeComplete={(color) => setEndColor(color.hex)}
          />
        </Stack>
      ) : fillMode == "solid" ? (
        <Stack>
          <h5>Solid Color</h5>
          <TwitterPicker
            triangle="hide"
            onChangeComplete={(color) => {
              setStartColor(color.hex);
              setEndColor(color.hex);
            }}
          />
        </Stack>
      ) : (
        <Stack>
          <h5>Drop your image</h5>
        </Stack>
      )}
    </Stack>
  );
}
