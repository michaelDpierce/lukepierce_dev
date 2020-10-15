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
            B2B FinTech software. The last company I co-founded, got acquired in
            2019 by a large player supporting the Mergers and Acquisitions
            (M&amp;A) vertical. Now, I am working on re-branding, developing,
            and scaling that application, to reach the global market.
            <br />
            <br />
            I love to work with ReactJS, Ruby, Python, and NodeJS. I've started
            multiple boutique software companies over the years. I have
            experience working with local and state governments, automotive
            dealerships, Fortune 500 companies, social media ad agencies, and
            fun small problems such as local rideshare advertising, car
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
            Projects
          </Heading>
          <ProjectCard
            title="SpeedyNote"
            description="A free website application for sending fast, secure & private Notes with Next.js, Tailwind, and React"
            href="https://speedynote.app/"
            icon="react2025"
          />
          <ProjectCard
            title="Milehigh Lawncare"
            description="A simple local landscaping application built by me using NodeJS and Bulma and hosted on Netlify/Cloudflare"
            href="https://www.milehighlawncare.com/"
            icon="jamstackfns"
          />
          <ProjectCard
            title="LP Photography"
            description="I am into photography, I had purchased a Nikon D3400 camera and I wanted to share my work on a website so people could easily view my work. This is my photography portfolio. "
            href="https://lpphotography.herokuapp.com/home.html"
            icon="nextjs"
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
              <a href="luke-pierce-resume.pdf" download>
                Download PDF
              </a>
            </Button>
            <Button mx={1} aria-label="Download DOCX Resume">
              <a href="luke-pierce-resume.docx" download>
                Download DOCX
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
