// =============================================================================
// Copyright © 2020 Michael Pierce. All rights reserved.
// =============================================================================

import {
  Button,
  Divider,
  Flex,
  Heading,
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
} from "@chakra-ui/core";
import { FULL_NAME, INTRO_TYPING } from "../lib/constants";

// import BlogPost from "@/components/BlogPost";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import Subscribe from "@/components/Subscribe";
import Timeline from "@/components/Timeline";
import useTyped from "@/components/useTyped";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const borderColor = {
    light: "gray.400",
    dark: "gray.600",
  };

  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
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
        <Text fontSize="6xl">Hi, I’m {FULL_NAME}</Text>
        <>
          <Text fontSize="3xl" mb={4}>
            <span ref={introRef} />
          </Text>
          <Text color={secondaryTextColor[colorMode]} fontSize="2xl">
            I'm a software entrepreneur who's currently working in enterprise
            B2B FinTech software. The last company I co-founded, got acquired in{" "}
            <Text as="u">2019</Text> by a international FinTech player
            addressing software for the Mergers and Acquisitions (M&amp;A)
            market. Now, I am working on re-branding, further developing, and
            scaling that application, to reach the global market.
            <br />
            <br />I love to work with <Text as="b">ReactJS</Text>,{" "}
            <Text as="b">Next.JS</Text>, <Text as="b">Ruby on Rails</Text>,{" "}
            <Text as="b">Flask & Python</Text>, and <Text as="b">Node.JS</Text>.
            <br />
            <br />
            I've started multiple boutique software companies over the years. I
            have experience working with local and state governments, automotive
            dealerships, Fortune 500 companies, social media ad agencies, and
            fun small side-projects such as local rideshare advertising, car
            dealership form processing, open water swimmer safety, and more!
            <br />
            <br />I plan on continuing to ship until I get tech-sick.
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
        {/* <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Most Popular
          </Heading>
          <BlogPost {...styleGuides} />
          <BlogPost {...stripeDesign} />
          <BlogPost {...monorepo} />
        </Flex> */}
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
            title="BankerBox"
            description="Simple CRM + Deal Manager for Investment Bankers. Streamlined M&amp;A outreach to buyers. Acquired in 2019 by SS&amp;C."
            href="https://dealmarketing.intralinks.com/"
            color="#7b45c7"
          />
          <ProjectCard
            title="AutoLytx"
            description="Automotive inventory analytics. Simplified. Helping automobile manufacturers and dealers harness the power of data. Currently owned and operating."
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
        <Subscribe />
      </Stack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Glad you want to learn more!</ModalHeader>
          <ModalBody>
            <Text fontSize="1xl">
              You can find my resume in the following formats:
            </Text>
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
