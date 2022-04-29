import { HStack, Link } from "@chakra-ui/react";
import React from "react";

export function Footer() {
  return (
    <footer>
      <HStack
        color="white"
        pos="fixed"
        bottom="0"
        justifyContent="center"
        gap="2rem"
        w="full"
        minH="16"
        bg="blackAlpha.100"
      >
        <p aria-aria-details="creator">
          Made by{" "}
          <Link bg="" href="https://gergopasztor.dev">
            Gergő Pásztor
          </Link>
        </p>
        <p>All rights reserved &copy;</p>
      </HStack>
    </footer>
  );
}
