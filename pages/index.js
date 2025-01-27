// =============================================================================
// Copyright © 2022 Michael Pierce. All rights reserved.
// =============================================================================

import {
  Button,
  Divider,
  Flex,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/core';
import { FULL_NAME, INTRO_TYPING } from '@/lib/constants';

import Container from '@/components/Container';
import NextLink from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import React from 'react';
import Timeline from '@/components/Timeline';
import useTyped from '@/components/useTyped';

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const borderColor = {
    light: 'gray.400',
    dark: 'gray.600',
  };

  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400',
  };

  const introRef = React.useRef(null);

  useTyped(introRef, {
    strings: INTRO_TYPING,
    typeSpeed: 30,
    backSpeed: 30,
  });

  return (
    <Container>
      <Stack
        as="main"
        spacing={3}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 6rem auto"
        maxWidth="700px"
      >
        <Text fontSize="5xl">Hi, I’m {FULL_NAME}</Text>
        <>
          <Text fontSize="3xl" mb={4}>
            <span ref={introRef} />
          </Text>
          <Text color={secondaryTextColor[colorMode]} fontSize="2xl">
            I'm a product manager, project manager, software engineer, multi-time SaaS startup
            founder and investor (co-founded a Micro-PE firm), passionate about connecting
            industries, from financial technology (FinTech) to automotive inventory analytic
            (AutoTech), to LegalTech, with consumer and operations data. In the past, I also had
            built and sold a company in the GovTech space serving parks and recreation departments
            across the US. Today, I lead post-merger integration of the startup I co-founded,
            BankerBox, with SS&amp;C Intralinks as Principal Product Manager, based in Boston, MA.
            You can read more about my background{' '}
            <NextLink href="/about" passHref>
              <Link color={secondaryTextColor[colorMode]}>
                <Text as="u">here</Text>
              </Link>
            </NextLink>
            .
          </Text>
          <>
            <br />
            <Button
              as="a"
              p={[1, 4]}
              w="250px"
              fontWeight="bold"
              m="3rem auto 0"
              onClick={onOpen}
              className="pointer-hand"
              aria-label="Grab My Resume"
              variantColor="teal"
              mb={4}
            >
              Grab My Resume
            </Button>
          </>
        </>
        <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />;
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Recent Projects
          </Heading>
          <ProjectCard
            title="GreetBox"
            description="Group-Based Greeting Cards Online. Bring joy to someone's life with an online eCard filled with messages, photos, videos, and GIFs!"
            href="https://greetbox.co/"
            color="#463cc3"
          />
          <ProjectCard
            title="BankerBox"
            description="Simple CRM + Deal Manager for Investment Bankers. Streamlined M&amp;A buyer and DCM outreach. Acquired in 2019 by SS&amp;C."
            href="https://dealmarketing.intralinks.com/"
            color="#7b45c7"
          />
          <ProjectCard
            title="AutoLytx"
            description="Automotive Inventory Analytics. Simplified. Helping automobile manufacturers and dealers harness the power of data. Currently owned and operating."
            href="https://www.autolytx.com/"
            color="#16d0b1"
          />
          <ProjectCard
            title="DigiQuatics"
            description="Commercial Swimming Pool Management Redefined. Staff Scheduling, Chemicals, Maintenance, and more. Sold to private buyer in 2019."
            href="https://digiquatics.com/"
            color="#394490"
          />
        </Flex>
        <Timeline />
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Glad you want to learn more!</ModalHeader>
          <ModalBody>
            <Text fontSize="1xl">You can find my resume in the following formats:</Text>
            <br />
            <Button mx={1} aria-label="Download PDF Resume">
              <a href="michael-pierce-resume.pdf" download>
                PDF
              </a>
            </Button>
            <Button mx={1} aria-label="Download DOCX Resume">
              <a href="michael-pierce-resume.docx" download>
                DOCX
              </a>
            </Button>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose} aria-label="Resume Modal Close">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
