import { Box, Text, Link } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box as="footer" bg="background.footer" p="20px" textAlign="center">
      <Text>© 2029 Odd Magnus Grinder. Expect the extraordinary.</Text>
      <Text>
        Here’s my email:{" "}
        <Link href="mailto:oddmagnus@grindr.no" color="text.accent">
          oddmagnus@grindr.no
        </Link>
        . Use it wisely, as I don’t waste my time on the average.
      </Text>
    </Box>
  );
}
