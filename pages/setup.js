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
import { FULL_NAME, HOST_URL } from "@/lib/constants";

import Container from "@/components/Container";
import { NextSeo } from "next-seo";

const url = `${HOST_URL}/setup`;
const title = `Setup – ${FULL_NAME}`;
const description = "My Setup for maximum productivity";

const Setup = () => {
  const { colorMode } = useColorMode();

  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
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
              Setup
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              This is my personal setup I use for work, fun, and everything
              in-between.
            </Text>
            <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />
            <Image
              className="pointer-hand"
              src="/static/images/setup-one.jpg"
              title="Setup Angle One"
              alt="Setup Angle One"
            />
            <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />
            <Image
              className="pointer-hand"
              src="/static/images/setup-two.jpg"
              title="Setup Angle Two"
              alt="Setup Angle Two"
            />
            <Divider borderColor={borderColor[colorMode]} my={8} w="100%" />
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              <List as="ol" styleType="decimal">
                <ListItem mb={6}>
                  <Link
                    href="https://www.dyson.com/lighting/task-lighting/dyson-lightcycle-morph/dyson-lightcycle-morph-overview"
                    title="Dyson"
                    isExternal
                  >
                    <a>Dyson lightcycle Morph Light</a>
                  </Link>{" "}
                  - This is a fantastic light. From the color temperature
                  adjustments to the sunrise-to-sunset settings every aspect of
                  this lamp is well thoughtout.
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.amazon.com/gp/product/B07XV9NQSJ/ref=ppx_yo_dt_b_asin_title_o09_s00?ie=UTF8&psc=1"
                    title="Amazon"
                    isExternal
                  >
                    <a>LG 27 Inch UltraFine 5K Display</a>
                  </Link>{" "}
                  - Great monitor for Macbook Pro users with USB-C looking for
                  HiDPI pixel scaling. You can use a single cable to connect the
                  monitor to your mac, resulting in power as well as Thunderbolt
                  3 display connection. I have my keyboard plugged into the
                  monitor with 2 ports to spare, this will allow me to sit-down
                  and simply plug in a single cable and I'm ready to go!
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.apple.com/shop/buy-mac/macbook-pro/16-inch-space-gray-2.6ghz-6-core-processor-512gb"
                    title="Apple"
                    isExternal
                  >
                    <a>Apple 16 Inch Macbook Pro</a>
                  </Link>{" "}
                  - Could not be happier with my 16 inch Spacegray Macbook Pro.
                  16GB of ram gives me a ton of flexability with running Docker
                  containers and intensive dev work, while the 1TB SSD is perect
                  for all my data.
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.amazon.com/gp/product/B01F01DRW6/ref=ppx_yo_dt_b_asin_title_o05_s00?ie=UTF8&psc=1"
                    title="Amazon"
                    isExternal
                  >
                    <a>mStand by Rain Design</a>
                  </Link>{" "}
                  Simple but high functioning laptop stand in Spacegray to match
                  my Mac. Has a nice cable hole at the bottom for my single
                  USB-C connection to my monitor setup.
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://grovemade.com/product/wool-felt-desk-pad/?initial=475"
                    title="Grovemade"
                    isExternal
                  >
                    <a>Small Dark Gray Wool Deskpad</a>
                  </Link>{" "}
                  Lovely deskpad that's handmade from Grovemade. Great company
                  out of Portland, OR. They offer several sizes and colors so be
                  sure to check out the store.
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.amazon.com/gp/product/B07MP1PV5B/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1"
                    title="Amazon"
                    isExternal
                  >
                    <a>Code V3 87-Key Illuminated Mechanical Keyboard</a>
                  </Link>{" "}
                  Coding is all about productivity, and part of that includes
                  the quality of your display, keyboard, and mouse. I'm loving
                  my CODE keyboard. I got the Cherry MX Clear keys, they offer a
                  good balance of feedback when I type, and I am not bothered by
                  the noise.
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.amazon.com/gp/product/B07MP1PV5B/ref=ppx_yo_dt_b_asin_title_o07_s00?ie=UTF8&psc=1"
                    title="Amazon"
                    isExternal
                  >
                    <a>Logitech MX Master 3 Mouse</a>
                  </Link>{" "}
                  Great mouse for multi-machine users. Using the memory setting
                  I can switch bluetooth connections in a fraction of a second.
                  I simple swap my personal Macbook Pro for my work Macbook Pro
                  and switch profiles on the mouse and boom, I'm ready to go.
                  Also, the battery on the MX Mouse lasts for two months!
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://nomadgoods.com/collections/cables-lightning/products/usb-c-lightning-kevlar-cable"
                    title="Nomad Goods"
                    isExternal
                  >
                    <a>Kelvar Lightning Cable USB-C</a>
                  </Link>{" "}
                  Having been super frustrated with low-quality USB-C/USB-A to
                  Lightning cables I found Nomad Goods's braided / kelvar cable.
                  Including metal connectors and a 5-year warranty.
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.lauradavidsondirect.com/products/soho-premier-ribbed-management-chair"
                    title="Laura Davidson Direct"
                    isExternal
                  >
                    <a>SOHO Premier Ribbed Management Chair</a>
                  </Link>{" "}
                  This chair is absolutely amazing. It is made within design and
                  quality specs of Herman Miller at a tenth of the cost. I
                  recommend going with the tan or black Italian Leather.
                </ListItem>
                <ListItem mb={6}>
                  <Link
                    href="https://www.fully.com/design/jarvis-adjustable-height-desk-laminate.html"
                    title="Fully"
                    isExternal
                  >
                    <a>Fully Jarvis Standing Desk</a>
                  </Link>{" "}
                  It's hard to call yourself a programmer in 2020 without a
                  standing desk. I love Fully desks and this is my second one.
                  You can now get an Alloy finish that gives it a nice
                  industrial feel.
                </ListItem>
              </List>
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Setup;
