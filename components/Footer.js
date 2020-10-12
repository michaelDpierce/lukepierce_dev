import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from "../lib/constants";
import { Flex, IconButton, Link } from "@chakra-ui/core";

import dynamic from "next/dynamic";

const InteractiveDots = dynamic(
  () => import("../components/InteractiveDotsNoSSR"),
  {
    ssr: false,
  }
);

const Footer = () => {
  return (
    <Flex align="center" mb={4} direction="column">
      <div className="social-media-icons-card">
        <Link href={TWITTER_URL} title="Twitter" isExternal>
          <IconButton
            aria-label="Twitter"
            icon="twitter"
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href={GITHUB_URL} title="GitHub" isExternal>
          <IconButton
            aria-label="GitHub"
            icon="github"
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href={LINKEDIN_URL} title="LinkedIn" isExternal>
          <IconButton
            aria-label="LinkedIn"
            icon="linkedin"
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href={YOUTUBE_URL} title="YouTube" isExternal>
          <IconButton
            aria-label="YouTube"
            icon="youtube"
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
        <Link href={`mailto:${CONTACT_EMAIL}`} title="Email" isExternal>
          <IconButton
            aria-label="Email"
            icon="mail"
            size="lg"
            color="gray.500"
            variant="ghost"
          />
        </Link>
      </div>
      <InteractiveDots
        fillStyleActive="#AE8422"
        fillStyleInactive="#f0f2f4"
        overrideHeight={300}
        dotSmall={4}
        dotLarge={25}
        hoverRadius={60}
        animationDuration={0.3}
      />
    </Flex>
  );
};

export default Footer;
