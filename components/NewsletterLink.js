// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import { Link, ListItem, useColorMode } from "@chakra-ui/core";
import { format, parseISO } from "date-fns";

import NextLink from "next/link";

const NewsletterLink = (frontMatter) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const slug = frontMatter.__resourcePath.replace(".mdx", "");

  return (
    <ListItem mb={2}>
      <NextLink href={slug} passHref>
        <Link color={secondaryTextColor[colorMode]}>
          {format(parseISO(frontMatter.publishedAt), "MMMM dd, yyyy")}
        </Link>
      </NextLink>
    </ListItem>
  );
};

export default NewsletterLink;
