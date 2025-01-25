import {
  Button,
  Heading,
  Text,
  Image,
  VStack,
  HStack,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

export function LightningMcQueenBrowser() {
  return (
    <HStack w="100vw" h="100vh" p="8" gap="8" bg="background.primary">
      <MotionImage
        src="/projects/LightningMcQueenBrowserLogo.png"
        alt="Lightning McQueen Browser Logo"
        w="50%"
        h="100%"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.4,
          },
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <VStack gap={8} textAlign="center">
        <Heading size="lg" color="text.accent">
          Lightning McQueen Browser
        </Heading>
        <Text fontSize="md" w="100%">
          The fastest, sleekest, and most stylish browser on the internet. Built
          for speed, optimized for performance. KACHOW!
        </Text>
        <Link href="https://github.com/bearmanser/grindr.no/raw/refs/heads/main/public/downloads/mini_installer.exe?download=">
          <Button as="a" size="lg" fontSize="lg">
            Download Now
          </Button>
        </Link>
      </VStack>
    </HStack>
  );
}
