// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import { FULL_NAME, HOST_URL } from "@/lib/constants";
import {
  Flex,
  Heading,
  List,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/core";

import Container from "@/components/Container";
import NewsletterLink from "@/components/NewsletterLink";
import { NextSeo } from "next-seo";
import Subscribe from "@/components/Subscribe";
// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as newsletters } from "./newsletter/**/*.mdx";

const url = `${HOST_URL}/newsletter`;
const title = `Newsletter – ${FULL_NAME}`;

const description =
  "Thoughts on the software industry, programming, tech, photography, and my personal life.";

const Newsletter = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

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
              Newsletter
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>Example</Text>
          </Flex>
          <Subscribe />
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              Archive
            </Heading>
            <List styleType="disc">
              {newsletters
                .sort(
                  (a, b) =>
                    Number(new Date(b.publishedAt)) -
                    Number(new Date(a.publishedAt))
                )
                .map((frontMatter) => (
                  <NewsletterLink key={frontMatter.title} {...frontMatter} />
                ))}
            </List>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Newsletter;
