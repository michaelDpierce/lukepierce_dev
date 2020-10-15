// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import {
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
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
          <Icon name="check-circle" mr={2} color="whatsapp.500" />
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
      2014
    </Heading>
    <List>
      <TimelineStep title="Became a Math Tutor">
        I got a job as a Math Tutor at my school. I loved helping fellow
        students with their homework, and it even helped me understand Math
        more.
      </TimelineStep>
      <TimelineStep title="Hiked my first 14er">
        I went on my first 14er hike named Gray's Peak with my cousin Kris, his
        wife Tiffany, and my cousin Jimmie. It was so difficult adjusting to the
        high altitude, I felt light headed, and I wanted to turn back halfway up
        the mountain. We eventually made it to the top up the and the scenery
        was so beautiful that I didn't have any regrets going on the hike.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2013
    </Heading>
    <List>
      <TimelineStep title="Appendicitis Surgery 💉">
        During this day, I had a very bad stomach ache and thought it may have
        been food poisoning. As the day went by, I was starting to get sharp
        pain in the lower left of my abdomen and it was becoming increasingly
        difficult to walk. I told my mom after researching on the internet that
        I thought I had appendicitis. She didn't believe me. I had a final this
        day so I was worried that I would have to miss it instead I went to
        school and told my professor after the test I am going to the hospital
        to get diagnosed for appendicitis and he thought I was crazy to be
        taking the test. I took the test in 25 minutes, limped out of school,
        and headed to the hospital. I was diagnosed with appendicitis and had my
        appendix removed. I got almost a perfect score on the math final.
      </TimelineStep>
    </List>
    <List>
      <TimelineStep title="Started attending Red Rocks Community College">
        My first semester at school I took College Algebra. I only wanted to
        take one class because I wasn't used to going to school or studying. I
        passed the class with a A.
      </TimelineStep>
    </List>
    <List>
      <TimelineStep title="Applied to Red Rocks Community College">
        As I was homeschooled and my mom went through a difficult time, I was
        behind in my academics. After taking the accuplacer, I was placed at the
        lowest level for Math, English, and Reading Comprehension. I felt like a
        failure and that I wasn't smart enough to attend college. I spent the
        next 6 months teaching myself those subjects for 7-8 hours per day.
        After failing the test 7 times in a row, I finally placed at college
        level for all 3 subjects.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2012
    </Heading>
    <List>
      <TimelineStep title="My Parents Got Divorced">
        It came as a shock to all of my brothers and was a depressing time for
        me. Although it was a devastating time for me, I choose to start working
        out and eating healthier because of this experience.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2009
    </Heading>
    <List>
      <TimelineStep title="NBA Basketball WCF Game">
        My dad and I went to see the Denver Nuggets play the Los Angeles Lakers
        in the Western Conference Finals. I met Rocky (Denver Nuggets Mascot),
        sat court side, and after we had dessert at Denver Chophouse. One of my
        favorite memories with my dad.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2006
    </Heading>
    <List>
      <TimelineStep title="Built my first computer">
        I built my first computer with my older brother when I was 10 years old.
        I played Call of Duty 2, Age of Empires, and Starcraft.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      2005
    </Heading>
    <List>
      <TimelineStep title="2005 NBA All-star weekend Denver">
        My dad took me and my cousin Jacob to the NBA All-star weekend in
        Denver. I met LL Cool J, saw 50 cent at a concert, and played games. It
        was such a cool experience.
      </TimelineStep>
    </List>
    <YearDivider />
    <Heading as="h3" size="lg" fontWeight="bold" mb={4} letterSpacing="tighter">
      1996
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
        2020
      </Heading>
      <List>
        <TimelineStep title="Hedged my index finger during a landscaping project 🌳 🚑">
          While hedging some shrubs during one of our projects, I reached my
          hand by accident in a hedger. My little brother then rushed me to the
          emergency clinic nearby, and I got 6 stiches in my finger.
        </TimelineStep>
      </List>
      <List>
        <TimelineStep title="Started a landscaping company with little brother 🌞 🌿">
          Started a local landscaping company named Milehigh Lawncare with my
          brother Adam. I developed a website, advertised on Craigslist,
          Nextdoor, Thumbtack, and taped fliers onto mailboxes. We had more than
          enough customers for the entire summer.
        </TimelineStep>
      </List>
      <List>
        <TimelineStep title="Broke my finger playing basketball 🚑 🏀">
          I went to play basketball at a local gym, and while I was playing pick
          up, I reached for the ball and my finger bent back. After two weeks,
          it kept hurting and I finally went to the doctor. Once I got some
          x-rays, he found that I had a fracture in my 4th finger. I had to wear
          a splint for 30 days.
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
        2019
      </Heading>
      <List>
        <TimelineStep title="Full time Employee at Raytheon 💻">
          I started a full time position as a Software Engineer I at Raytheon in
          Aurora, CO.
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
        2018
      </Heading>
      <List>
        <TimelineStep title="Graduated from Colorado School of Mines 🎓 🏫">
          I graduated from Colorado School of Mines in December 2018 as the top
          graduating senior in Electrical Engineering and Magna Cum Laude. My
          grandpa and mom were both so proud of me.
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
        2017
      </Heading>
      <List>
        <TimelineStep title="Software Developer Internship ⌨️ 🖱">
          I worked at Vortek Instruments as a Software Engineering Intern and
          created NodeJS applications to communicate with different C++
          applications they used.
        </TimelineStep>
      </List>
      <List>
        <TimelineStep title="Hiked Mt of the Holy Cross, 34th 14er 🏔">
          Hiked Mt of the Holy Cross in Buena Vista, CO. It was my 34th out of
          all 54 14ers in Colorado. It was the most gorgeous hike I have been
          on.
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
