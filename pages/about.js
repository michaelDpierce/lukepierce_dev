// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import {
  Divider,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import { FULL_NAME, HOST_URL } from "../lib/constants";
import React, { useEffect, useState } from "react";

import Container from "@/components/Container";
import { NextSeo } from "next-seo";
import Skeleton from "react-loading-skeleton";
import dynamic from "next/dynamic";
import useMobile from "@/components/useMobile";

const url = `${HOST_URL}/about`;
const title = `About Me – ${FULL_NAME}`;

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <Skeleton height={650} width={700} />,
});

const About = () => {
  const isTouchDevice = useMobile();
  const { colorMode } = useColorMode();

  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(function () {
      setLoading(false);
    }, 400);
  }, [colorMode]);

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title,
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
              About Me
            </Heading>
            <Image
              className="pointer-hand"
              src="/static/images/peru.png"
              title="Peru 2019"
              alt="Peru 2019"
            />
            <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />
            <Text color={secondaryTextColor[colorMode]} fontSize="2xl" mb={4}>
              As of April 2019, I've been a Managing Principal Engineer for a
              FinTech company in Boston, MA.
              <br />
              <br />I was born and raised in beautiful Denver, CO. I grew up
              camping, hiking, and enjoying the great outdoors. At a young age,
              I started to build computers, learn to code, and fall in love with
              all things tech. I have a maltese yorkie named George, who my
              family all calls "Tuna" after Jim from The Office. I am an avid
              traveler, whiskey and cigar connoisseur, and I plan on retiring
              early. I'm a big proponet of the F.I.R.E. movement.
            </Text>
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Get In Touch
            </Heading>
            <Text color={secondaryTextColor[colorMode]} fontSize="2xl" mb={4}>
              <List as="ol" styleType="decimal">
                <ListItem>IndieHackers - @matchmike1313</ListItem>
                <ListItem>Hacker News - @matchmike1313</ListItem>
                <ListItem>GitHub - @michaelDpierce</ListItem>
              </List>
            </Text>
            <Heading letterSpacing="tight" mb={2} as="h2" size="2xl">
              My US Travels
            </Heading>
            {loading ? (
              <Skeleton height={650} width={700} />
            ) : (
              <Map
                name="us"
                colorMode={colorMode}
                showZoom={false}
                mobile={isTouchDevice}
                mapType={"usaAlbersLow"}
                seriesOneFill={"#C5B36D"}
                seriesOneStroke={"#000000"}
              />
            )}
            <Heading letterSpacing="tight" mt={5} mb={2} as="h2" size="2xl">
              My World Travels
            </Heading>
            {loading ? (
              <Skeleton height={650} width={700} />
            ) : (
              <Map
                name="world"
                colorMode={colorMode}
                showZoom={true}
                mobile={isTouchDevice}
                mapType={"worldLow"}
                seriesOneFill={"#C5B36D"}
                seriesOneStroke={"#000000"}
              />
            )}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
