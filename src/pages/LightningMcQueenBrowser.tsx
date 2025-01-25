import {
  Button,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";

export function LightningMcQueenBrowser() {
  console.log("Lightning McQueen Browser Page");
  return (
      <HStack  w="100vw" h="100vh" p="8" gap="8" bg="background.primary">
        <Image
          src="/projects/LightningMcQueenBrowserLogo.png"
          alt="Lightning McQueen Browser Logo"
            w="50%"
            h="100%"
        />

        <VStack gap={8} textAlign="center">
          <Heading size="lg" color="text.accent">Lightning McQueen Browser</Heading>
          <Text fontSize="md" w="100%">
            The fastest, sleekest, and most stylish browser on the internet.
            Built for speed, optimized for performance. KACHOW!
          </Text>
          <Link href="https://bearmanser.github.io/grind.no/downloads/lightning-mcqueen-browser.zip">
          <Button as="a" size="lg" fontSize="lg">
            Download Now
          </Button>
          </Link>
        </VStack>
      </HStack>
  );
}
