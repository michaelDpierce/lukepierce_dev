// =============================================================================
// Copyright © 2022 Michael Pierce. All rights reserved.
// =============================================================================

import { Button, Flex, Input, Link, Text, useClipboard } from "@chakra-ui/core";

import { CONTACT_EMAIL } from "@/lib/constants";

function ContactEmail() {
  const value = CONTACT_EMAIL;
  const { onCopy, hasCopied } = useClipboard(value);

  return (
    <>
      <Flex mb={2}>
        <Input value={value} isReadOnly placeholder="Email" onClick={onCopy} />
        <Button onClick={onCopy} ml={2} aria-label="Copy Email to Clipboard">
          {hasCopied ? "Copied" : "Copy"}
        </Button>
        <br />
        <br />
      </Flex>
      <Text fontSize="1xl">
        If you prefer <Text as="kbd">mailto</Text>:{" "}
        <Link
          href={`mailto:${CONTACT_EMAIL}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {CONTACT_EMAIL}
        </Link>
      </Text>
    </>
  );
}

export default ContactEmail;
