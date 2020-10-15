// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import { Box, Flex, Heading, Link, Text, useColorMode } from "@chakra-ui/core";

import NextLink from "next/link";
import React from "react";
import fetcher from "@/lib/fetcher";
import format from "comma-number";
import useSWR from "swr";

const BlogPost = (frontMatter) => {
  const { title, summary } = frontMatter;
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const slug = frontMatter.__resourcePath
    .replace("blog/", "")
    .replace(".mdx", "");

  const { data } = useSWR(`/api/page-views?id=${slug}`, fetcher);
  const views = data?.total;

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Link w="100%" _hover={{ textDecoration: "none" }}>
        <Box mb={8} display="block" width="100%">
          <Flex
            width="100%"
            align="flex-start"
            justifyContent="space-between"
            flexDirection={["column", "row"]}
          >
            <Heading size="md" as="h3" mb={2} fontWeight="medium">
              {title}
            </Heading>
            <Text
              color="gray.500"
              minWidth="105px"
              textAlign={["left", "right"]}
              mb={[4, 0]}
            >
              {`${views ? format(views) : "–––"} views`}
            </Text>
          </Flex>
          <Text color={secondaryTextColor[colorMode]}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
