import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const MotionFlex = motion(Flex);

export function ContentSection({
  title,
  text,
  image,
  reverse = false,
}: {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
}) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <MotionFlex
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: reverse ? 100 : -100 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.6 }}
      direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
      align="center"
      p={{ base: "20px", md: "50px" }}
      textAlign={{ base: "center", md: reverse ? "start" : "end" }}
    >
      <Image
        src={image}
        alt={title}
        width={{ base: "80%", md: "45%" }}
        mb={{ base: "20px", md: "0" }}
      />
      <Box width={{ base: "80%", md: "50%" }} p="20px">
        <Heading
          fontSize="lg"
          color="text.accent"
          mb="20px"
          lineHeight={{ base: "1.2", md: "1.4" }}
        >
          {title}
        </Heading>
        <Text fontSize="md" lineHeight="1.6">
          {text}
        </Text>
      </Box>
    </MotionFlex>
  );
}
