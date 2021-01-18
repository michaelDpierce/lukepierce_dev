// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================
import { useEffect, useState } from "react";

import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/core";

import ContactEmail from "@/components/ContactEmail";
import Footer from "./Footer";
import NextLink from "next/link";
import styled from "@emotion/styled";

const StickyNav = styled(Flex)`
  position: sticky;
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const size = useWindowSize();

  const bgColor = {
    light: "white",
    dark: "gray.900",
  };

  const primarytextColor = {
    light: "black",
    dark: "white",
  };

  const navBgColor = {
    light: "rgba(255, 255, 255, 0.8)",
    dark: "rgba(23, 25, 35, 0.8)",
  };

  function storeColor() {
    if (colorMode === "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  }

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bg={navBgColor[colorMode]}
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <Box>
          <NextLink href="/" passHref>
            {colorMode === "dark" ? (
              <a>
                <Image
                  className="pointer-hand"
                  height="60px"
                  src="/static/images/signature-white.png"
                  title="Michael Pierce Signature"
                />
              </a>
            ) : (
              <a>
                <Image
                  className="pointer-hand"
                  height="60px"
                  src="/static/images/signature-black.png"
                  title="Michael Pierce Signature"
                />
              </a>
            )}
          </NextLink>
        </Box>
        {size.width > 700 ? (
          <Box>
            <NextLink href="/dashboard" passHref>
              <Button
                as="a"
                variant="ghost"
                p={[1, 4]}
                aria-label="Dashboard Nav Link"
              >
                Dashboard
              </Button>
            </NextLink>
            <NextLink href="/about" passHref>
              <Button
                as="a"
                variant="ghost"
                p={[1, 4]}
                aria-label="About Nav Link"
              >
                About
              </Button>
            </NextLink>
            <Link title="Email" onClick={onOpen} isExternal>
              <Button variant="ghost" p={[1, 4]} aria-label="Contact Nav Link">
                Contact
              </Button>
            </Link>
            <IconButton
              mx={2}
              aria-label="Toggle dark mode"
              icon={colorMode === "dark" ? "sun" : "moon"}
              onClick={() => {
                toggleColorMode();
                storeColor();
              }}
            />
          </Box>
        ) : (
          <Box>
            <Menu>
              <MenuButton as={Button} aria-label="Mobile Nav Hamburger">
                <svg viewBox="0 0 100 80" width="15" height="30">
                  <rect width="100" height="20"></rect>
                  <rect y="30" width="100" height="20"></rect>
                  <rect y="60" width="100" height="20"></rect>
                </svg>
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <NextLink href="/dashboard" passHref>
                    Dashboard
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/about" passHref>
                    About
                  </NextLink>
                </MenuItem>
                <MenuItem>
                  <NextLink href="/contact" passHref>
                    Contact
                  </NextLink>
                </MenuItem>
              </MenuList>
            </Menu>
            <IconButton
              mx={2}
              aria-label="Toggle dark mode"
              icon={colorMode === "dark" ? "sun" : "moon"}
              onClick={() => {
                toggleColorMode();
                storeColor();
              }}
            />
          </Box>
        )}
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
        <Footer />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Contact Me</ModalHeader>
            <ModalBody>
              <ContactEmail />
            </ModalBody>
            <ModalFooter>
              <Button
                className="mx-2"
                mr={3}
                onClick={onClose}
                aria-label="Close Contact Me Modal"
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export default Container;
