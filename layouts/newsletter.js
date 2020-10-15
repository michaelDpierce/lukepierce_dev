// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import {
  Avatar,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import { format, parseISO } from "date-fns";

import BlogSeo from "@/components/BlogSeo";
import Container from "@/components/Container";
import Subscribe from "@/components/Subscribe";

export default (frontMatter) => {
  const slug = frontMatter.__resourcePath
    .replace("newsletter/", "")
    .replace(".mdx", "");

  return ({ children }) => {
    const { colorMode } = useColorMode();
    const textColor = {
      light: "gray.700",
      dark: "gray.400",
    };

    return (
      <Container>
        <BlogSeo
          url={`https://michaelpierce.dev/newsletter/${slug}`}
          {...frontMatter}
        />
        <Stack
          as="article"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          w="100%"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            w="100%"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              {frontMatter.title}
            </Heading>
            <Flex
              justify="space-between"
              align={["initial", "center"]}
              direction={["column", "row"]}
              mt={2}
              w="100%"
              mb={4}
            >
              <Flex align="center">
                <Avatar
                  size="xs"
                  name="Lee Robinson"
                  src="https://bit.ly/33vEjhB"
                  mr={2}
                />
                <Text fontSize="sm" color={textColor[colorMode]}>
                  {frontMatter.by}
                  {"Lee Robinson / "}
                  {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
                </Text>
              </Flex>
              <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
                {frontMatter.readingTime.text}
              </Text>
            </Flex>
          </Flex>
          {children}
          <Subscribe />
        </Stack>
      </Container>
    );
  };
};
