// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import {
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/core";

import { FULL_NAME, HOST_URL } from "../lib/constants";
import React, { useEffect, useState } from "react";

import Container from "@/components/Container";
import NextLink from "next/link";
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
            <Heading letterSpacing="tight" mb={4} as="h1" size="2xl">
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
              I'm a software engineer, project manager, and multi-time SaaS
              startup founder, passionate about connecting industries, from
              financial technology to automotive manufacturing, to legaltech,
              with consumer and operations data.
              <br />
              <br />
              Following the acquisition of BankerBox in 2019, I've assumed a
              principal engineering role with Boston-based SS&amp;C Intralinks,
              steering post-merger integration and product research and
              development. When I co-founded the fintech SaaS company, BankerBox
              in 2017, I set out to co-create a cloud-based process management
              platform that automates time-consuming tasks associated with
              M&amp;A due diligence, while retaining a high-touch, personalized
              approach. Today, BankerBox, renamed Intralinks for Deal Marketing,
              serves global banking, deal making, and capital markets with new
              users onboarded every day.
              <br />
              <br />
              Along with driving software development for the fintech firm, I'm
              scaling my automotive inventory analytics SaaS company, AutoLytx.
              Founded in 2015, AutoLytx seeks to help automobile manufacturers
              and dealers harness the power of data and ultimately build
              profitable, fast-selling car inventories. For five years, I've
              served as co-founder and CTO, working with clients nationally to
              improve the user and customer experience, while providing
              data-driven recommendations powering $600M in inventory orders
              annually.
              <br />
              <br />
              I hold a Bachelor of Science in Economics from Colorado School of
              Mines. Outside of my tech endeavors, I spend my time traveling
              with plans to visit every U.S. state (nine to go!). I also enjoy
              cooking and exploring around New England neighborhood in hopes of
              finding my next favorite cocktail bar, brewery, or Mexican
              restaurant. I also enjoy hiking, keep up on the latest in high-end
              menswear fashion, and walking my dog, George, a.k.a. "Tuna".
              <br />
              <br />
              As of April 2019, I've been a Managing Principal Engineer for a
              FinTech company in Boston, MA.
              <br />
              <br />
              Going way back {"->"}
              <br />
              <br />
              I was born and raised in beautiful Denver, CO. I grew up camping,
              hiking, and enjoying the great outdoors. At a young age, I started
              to build computers, learning to code, and fell in love with all
              things tech. I have a maltese yorkie named George, who my family
              all calls "Tuna" after Jim from The Office. I'm an avid traveler,
              whiskey and cigar connoisseur, and I plan on retiring by 55. I'm a
              big proponet of the F.I.R.E. movement.
              <br />
              <br />
              Back to the present, programming things I love {"->"}
              <br />
              <br />
              <Text as="b">ReactJS</Text>, <Text as="b">Next.JS</Text>,{" "}
              <Text as="b">Ruby on Rails</Text>,{" "}
              <Text as="b">Flask &amp; Python</Text>, and{" "}
              <Text as="b">Node.JS</Text>.
              <br />
              <br />
              Curious about my coding setup?{" "}
              <NextLink href="/setup" passHref>
                <Link color={secondaryTextColor[colorMode]}>
                  <Text as="u">Check it out here!</Text>
                </Link>
              </NextLink>
              <br />
              <br />I plan on continuing to ship until I get tech-sick.
            </Text>
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Get In Touch
            </Heading>
            <Text color={secondaryTextColor[colorMode]} fontSize="2xl" mb={4}>
              <List as="ol" styleType="decimal">
                <ListItem>
                  <Link
                    href="https://www.indiehackers.com/matchmike1313"
                    title="IndieHackers"
                    isExternal
                  >
                    <a>IndieHackers - @matchmike1313</a>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://news.ycombinator.com/user?id=matchmike1313"
                    title="HackerNews"
                    isExternal
                  >
                    <a>Hacker News - @matchmike1313</a>
                  </Link>
                </ListItem>
                <ListItem>Email - Contact Link Above</ListItem>
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
