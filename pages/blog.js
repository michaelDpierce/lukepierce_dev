// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import { FULL_NAME, HOST_URL } from "@/lib/constants";
import {
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import React, { useState } from "react";

import BlogPost from "@/components/BlogPost";
import Container from "@/components/Container";
import { NextSeo } from "next-seo";
// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as blogPosts } from "./blog/**/*.mdx";

// import { frontMatter as styleGuides } from "./blog/style-guides-component-libraries-design-systems.mdx";
// import { frontMatter as stripeDesign } from "./blog/how-stripe-designs-beautiful-websites.mdx";
// import { frontMatter as monorepo } from "./blog/monorepo-lerna-yarn-workspaces.mdx";

const url = `${HOST_URL}/blog`;
const title = `Blog – ${FULL_NAME}`;

const description =
  "Thoughts on the software industry, programming, tech, photography, and my personal life.";

const Blog = () => {
  const [searchValue, setSearchValue] = useState("");
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const filteredBlogPosts = blogPosts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Blog
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              {`I've written ${blogPosts.length}.`}
            </Text>
            <InputGroup my={4} mr={4} w="100%">
              <Input
                aria-label="Search articles"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search articles"
              />
              <InputRightElement>
                <Icon name="search" color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </Flex>
          {!searchValue && (
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              maxWidth="700px"
              mt={8}
            >
              <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
                Most Popular
              </Heading>
              {/* <BlogPost {...styleGuides} />
              <BlogPost {...stripeDesign} />
              <BlogPost {...monorepo} /> */}
            </Flex>
          )}
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              All Posts
            </Heading>
            {!filteredBlogPosts.length && "No posts found."}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Blog;
