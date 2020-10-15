// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import {
  Box,
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/core";
import React, { useRef, useState } from "react";

import { FATHOM_SUBSCRIBE_GOAL } from "@/lib/constants";
import { trackGoal } from "fathom-client";

const Subscribe = () => {
  const [loading, setLoading] = useState(false);
  const inputEl = useRef(null);
  const toast = useToast();
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "blue.50",
    dark: "blue.900",
  };
  const borderColor = {
    light: "blue.200",
    dark: "blue.900",
  };

  const subscribe = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    setLoading(false);
    const { error } = await res.json();

    if (error) {
      toast({
        title: "An error occurred.",
        description: error,
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    trackGoal(FATHOM_SUBSCRIBE_GOAL, 0);

    inputEl.current.value = "";

    toast({
      title: "Success!",
      description: "You are now subscribed.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      border="1px solid"
      borderColor={borderColor[colorMode]}
      bg={bgColor[colorMode]}
      borderRadius={4}
      padding={6}
      my={4}
      w="100%"
    >
      <Heading as="p" size="lg" mb={2}>
        Subscribe to the Newsletter
      </Heading>
      <Text>
        Get emails from me about web development, tech, life, and early access
        to new articles.
      </Text>
      <InputGroup size="md" mt={4}>
        <Input
          aria-label="Email"
          placeholder="you@hey.com"
          ref={inputEl}
          type="email"
        />
        <InputRightElement width="6.75rem">
          <Button
            isLoading={loading}
            fontWeight="bold"
            h="1.75rem"
            size="sm"
            onClick={subscribe}
            aria-label="Subscribe"
          >
            Subscribe
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Subscribe;
