// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import {
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import React, { useState } from "react";

const YearDivider = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };
  return <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />;
};

const TimelineStep = ({ title, children }) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "gray.700",
    dark: "gray.400",
  };

  return (
    <ListItem>
      <Stack ml={2} mb={4}>
        <Flex align="center">
          <Text fontWeight="medium">{title}</Text>
        </Flex>
        <Text color={color[colorMode]} ml={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  );
};

const FullTimeline = () => (
  <>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2008
    </Heading>
    <List>
      <TimelineStep title="Seed of My First Start-Up Idea 🌱">
        When I was 15 years old, I started working. By the age of 19, I fell
        into being a manager of a local country club pool. The entire staff quit
        to protest the management company that hired them. I stayed on, as the
        sole employee. Learning by doing is what I do best. I hired staff, read
        about chemical management and pool operations, and helped the club
        finish off the season smoothly. Having took some C++ in college, I wrote
        a simple C++ program to calculate the pools Saturation Index (SI), and
        gave it to the maintenance staff.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2006
    </Heading>
    <List>
      <TimelineStep title="Early Acceptance into College 🎓">
        At the age of 16 I started my college career early. I will never forgot
        the feeling of being a young kid sitting in the front-row of my
        Mathematics class, surrounded by my more matured peers.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2005
    </Heading>
    <List>
      <TimelineStep title="First International Trip 🇳🇿">
        My best friend in highschool invited me to go to New Zealand with him
        and his family. The plan was to do missions work and make a sizable
        donation to a school in Tonga, after our trip to NZ. This was my first
        of many travels, and the source of my wanderlust.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2001
    </Heading>
    <List>
      <TimelineStep title="Built My First Computer 💾">
        As my interest in tech grew, I built my first computer.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      1993
    </Heading>
    <List>
      <TimelineStep title="First Game Console 🎮">
        My parents bought me the Super Nintendo Super Mario World bundle at
        BestBuy. My inner-nerd was born.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      1988
    </Heading>
    <List>
      <TimelineStep title="Born 👶🏼🍼" />
    </List>
  </>
);

const Timeline = () => {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <Flex
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      maxWidth="700px"
      mt={8}
    >
      <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
        Timeline
      </Heading>
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2019
      </Heading>
      <List>
        <TimelineStep title="Busiest Year of My Life ⏳">
          Wow... 2019 was a whirlwind. From selling DigiQuatics, to getting
          BankerBox acquired, to moving across the country, this year was SUPER
          crazy from start to finish. You can read all about it in this{" "}
          <Link href="https://mpierce.blog/posts/my-eventful-2019" isExternal>
            <Text as="u">blog post</Text>
          </Link>
          .
        </TimelineStep>
      </List>
      <YearDivider />
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2013
      </Heading>
      <List>
        <TimelineStep title="Started My First Company 💻">
          In 2013 I started DigiQuatics. The seed of an idea I had when I was
          the pool manager had grown and I wanted to pursue a SaaS solution.
          Besides some C++, UNIX, and HTML/CSS in college I had no real
          experience. I started off on Google, learning how to build an app. 5
          years later, DigiQuatics grew to 35,000 users, spread across 5
          countries. My life changed forever from this moment.
        </TimelineStep>
      </List>
      <YearDivider />
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2011
      </Heading>
      <List>
        <TimelineStep title="Professor of Mathematics 👨‍🏫">
          Math has always been one of my passions. I spent years as a tutor and
          decided to become a professor at a local community college.
        </TimelineStep>
      </List>
      <YearDivider />
      <Heading
        as="h3"
        size="lg"
        fontWeight="bold"
        mb={4}
        letterSpacing="tighter"
      >
        2010
      </Heading>
      <List>
        <TimelineStep title="Graduated from Colorado School of Mines 🏫">
          I graduated from Colorado School of Mines with a Bachelors in Science
          in Economics.
        </TimelineStep>
      </List>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <Button
          my={4}
          mx="auto"
          fontWeight="medium"
          rightIcon="chevron-down"
          variant="ghost"
          aria-label="Show full timeline"
          onClick={() => showFullTimeline(true)}
        >
          See More
        </Button>
      )}
    </Flex>
  );
};

export default Timeline;
