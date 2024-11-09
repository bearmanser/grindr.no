import { Box, Image, Text, Center, Heading } from "@chakra-ui/react";

export function MainImageWithQuote() {
  return (
    <Box w={"100%"} overflow="hidden">
      <Image src={"pic13.png"} alt={"Odd Magnus Grinder"} w={"100%"} />
      <Center
        position={"absolute"}
        top={{ base: "100vh", md: "50vh" }}
        w={"100%"}
      >
        <Box
          textAlign={"center"}
          bg={"background.overlay"}
          p={"8px"}
          w={{ base: "100%", md: "80%" }}
        >
          <Heading
            fontSize={{ base: "lg", md: "xl" }}
            lineHeight={{ base: "1.2", md: "1.4" }}
          >
            "It’s hard to be humble when you’re as great as I am."
          </Heading>
        </Box>
      </Center>
    </Box>
  );
}
