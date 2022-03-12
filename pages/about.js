// =============================================================================
// Copyright © 2022 Michael Pierce. All rights reserved.
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
} from '@chakra-ui/core';
import { FULL_NAME, HOST_URL } from '../lib/constants';
import React, { useEffect, useState } from 'react';

import Container from '@/components/Container';
import NextLink from 'next/link';
import { NextSeo } from 'next-seo';
import Skeleton from 'react-loading-skeleton';
import dynamic from 'next/dynamic';
import useMobile from '@/components/useMobile';

const url = `${HOST_URL}/about`;
const title = `About – ${FULL_NAME}`;

const Map = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: () => <Skeleton height={650} width={700} />,
});

const About = () => {
  const isTouchDevice = useMobile();
  const { colorMode } = useColorMode();

  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  };

  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
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
              About
            </Heading>
            <Image
              className="pointer-hand"
              src="/static/images/peru.png"
              title="Peru 2019"
              alt="Peru 2019"
            />
            <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />
            <Text color={secondaryTextColor[colorMode]} fontSize="2xl" mb={4}>
              I'm a product manager, project manager, software engineer, multi-time SaaS startup
              founder and investor (co-founded a Micro-PE firm), passionate about connecting
              industries, from financial technology (FinTech) to automotive inventory analytic
              (AutoTech), to LegalTech, with consumer and operations data. In the past, I also had
              built and sold a company in the GovTech space serving parks and recreation departments
              across the US.
              <br />
              <br />
              Following the acquisition of BankerBox in 2019, I've assumed a managing principal
              engineering management role with Boston-based SS&amp;C Intralinks, steering
              post-merger integration and product research and development. When I co-founded the
              FinTech SaaS company, BankerBox in 2017, I set out to co-create a cloud-based process
              management platform that automates time-consuming tasks associated with M&amp;A due
              diligence, while retaining a high-touch, personalized approach. Today, BankerBox,
              renamed Intralinks for Deal Marketing, serves global banking, deal making, and capital
              markets with new users onboarded every day. Since, I have moved into Product
              Management, spearheading this product and our GTM strategy for the company. Working
              with customer such as Goldman Sachs, JP Morgan, and Citigroup, and others.
              <br />
              <br />
              Along with driving software development for the FinTech firm, I'm scaling my
              automotive inventory analytics SaaS company, AutoLytx. Founded in 2015, AutoLytx seeks
              to help automobile manufacturers and dealers harness the power of data and ultimately
              build profitable, fast-selling car inventories. For seven years, I've served as
              co-founder and CTO, working with clients nationally to improve the user and customer
              experience, while providing data-driven recommendations powering $600MM in inventory
              orders annually.
              <br />
              <br />
              More recently, I have been invited to serve as an Advisor for High Alpha Innovation's
              Fusion Advisor Network. This network is a diverse community of forward-thinking
              skilled business and tech professionals who passionately want to support founders
              build and scale early-stage startups from pre-seed through series funding. I'll be
              advising founders of these portfolio companies via my experience across various
              industries, leadership roles, and enterprise GTM expertise. I'm also a contributing
              writer for two industry publications: The Product Manager and Product Led Alliance.
              <br />
              <br />
              I hold a Bachelor of Science in Economics from Colorado School of Mines. Outside my
              tech endeavors, I spend my time traveling with plans to travel to 100 countries (15
              down) and every US State and Territory (Completed the states and have 2 territories
              left). I'm recently married as of May 22nd, 2021 and we enjoy cooking and exploring
              around New England neighborhoods in hopes of finding our next favorite cocktail bar,
              brewery, or foodie spot. I also enjoy hiking, keep up on the latest in high-end
              menswear fashion, and walking my dog, Appa a 1.5 year old Jack Russell Terrier!
              <br />
              <br />
              As of June 2021, I've headed up the Deal Marketing Division as a Principal Product
              Manager for a FinTech company in Boston, MA.
              <br />
              <br />
              Going way back {'->'}
              <br />
              <br />
              I was born and raised in beautiful Denver, CO. I grew up camping, hiking, and enjoying
              the great outdoors. At a young age, I started to build computers, learning to code,
              and fell in love with all things tech. I have a Maltese Yorkie named George, who my
              family all calls "Tuna" after Jim from The Office. Recently, my wife and I got a Jack
              Russell Terrier named Appa after Avatar The Last Airbender. I'm an avid traveler,
              whiskey and cigar connoisseur, and I plan on retiring by 55. Furthermore, I'm a big
              proponent of the F.I.R.E. movement.
              <br />
              <br />
              Back to the present, programming frameworks &amp; languages I love {'->'}
              <br />
              <br />
              <Text as="b">React</Text>, <Text as="b">NextJS</Text>,{' '}
              <Text as="b">Ruby on Rails</Text>, <Text as="b">Flask &amp; Python</Text>, and{' '}
              <Text as="b">Node</Text>.
              <br />
              <br />
              Curious about my coding setup?{' '}
              <NextLink href="/setup" passHref>
                <Link color={secondaryTextColor[colorMode]}>
                  <Text as="u">Check it out here!</Text>
                </Link>
              </NextLink>
              <br />
              <br />I plan on continuing to ship and deliver increments of value with PM until I get
              SaaS-sick.
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
            <Text color={secondaryTextColor[colorMode]} fontSize="2xl" mb={4}>
              I'm happy to announce I have finished my last state in October of 2021, Bismarck,
              North Dakota.
            </Text>

            {loading ? (
              <Skeleton height={650} width={700} />
            ) : (
              <Map
                name="us"
                colorMode={colorMode}
                showZoom={false}
                mobile={isTouchDevice}
                mapType={'usaAlbersLow'}
                seriesOneFill={'#C5B36D'}
                seriesOneStroke={'#000000'}
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
                mapType={'worldLow'}
                seriesOneFill={'#C5B36D'}
                seriesOneStroke={'#000000'}
              />
            )}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default About;
