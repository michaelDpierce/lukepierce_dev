// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import { FULL_NAME, HOST_URL } from "@/lib/constants";
import {
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/core";

import Analytics from "@/components/metrics/Analytics";
import Buttondown from "@/components/metrics/Buttondown";
import Container from "@/components/Container";
import { NextSeo } from "next-seo";
import Unsplash from "@/components/metrics/Unsplash";

const url = `${HOST_URL}/dashboard`;
const title = `Dashboard – ${FULL_NAME}`;
const description = "My personal dashboard.";

const Dashboard = () => {
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
              Dashboard
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              This is my personal dashboard. I use this dashboard to track
              various metrics across platforms like Unsplash, my blog views, and
              more.
            </Text>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Unsplash />
            <SimpleGrid columns={[1, 1, 2]} spacing={4} mb={4}>
              <Analytics />
              <Buttondown />
            </SimpleGrid>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Dashboard;
