import { Box, Image, Center, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

const quote = "It’s hard to be humble when you’re as great as I am.";

export function MainImageWithQuote() {
  return (
    <Box w={"100%"} overflow="hidden" position="relative">
      {/* Image for mobile */}
      <Image
        src="pic20.png"
        alt="Odd Magnus Grinder"
        w="100%"
        display={{ base: "block", md: "none" }}
      />
      {/* Image for desktop */}
      <Image
        src="pic19.png"
        alt="Odd Magnus Grinder"
        w="100%"
        display={{ base: "none", md: "block" }}
      />
      <Center
        position={"absolute"}
        top={{ base: "35vh", sm: "70vh" , md: "30vh", xl: "40vh" }}
        w={"100%"}
      >
        <Box
          textAlign={"center"}
          bg={"background.overlay"}
          p={"8px"}
          w={{ base: "100%", md: "80%" }}
        >
          <Heading
            fontSize={{ base: "lg", md: "lg", xl: "xl" }}
            lineHeight={{ base: "1.2", md: "1.4" }}
            display="inline-block"
          >
            {quote.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.05,
                  delay: index * 0.05,
                }}
              >
                {char}
              </motion.span>
            ))}
          </Heading>
        </Box>
      </Center>
    </Box>
  );
}
