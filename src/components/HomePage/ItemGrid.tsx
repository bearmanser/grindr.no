import {
  Box,
  SimpleGrid,
  GridItem,
  Image,
  Heading,
  Text,
  Link,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Item {
  src: string;
  title?: string;
  link?: string;
  status?: string;
}

interface ItemGridProps {
  title: string;
  items: Item[];
  itemSize?: string;
}

const MotionGridItem = motion(GridItem);

export function ItemGrid({ title, items, itemSize }: ItemGridProps) {
  function getStatusColor(status: string) {
    switch (status) {
      case "In progress":
        return "status.yellow";
      case "Completed":
        return "status.green";
      case "Not started":
        return "status.red";
      default:
        return "gray";
    }
  }

  return (
    <Box>
      <Heading textAlign="center" fontSize="2em" color="text.accent" mb="20px">
        {title}
      </Heading>
      <SimpleGrid
        minChildWidth={itemSize}
        gap="16px"
        p="20px 0"
        justifyItems="center"
        alignItems="center"
      >
        {items.map((item, index) => {
          const { ref, inView } = useInView({
            threshold: 0.1,
            triggerOnce: true,
          });

          const variants = {
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.4,
                delay: index * 0.1,
              },
            },
          };

          return (
            <MotionGridItem
              key={index}
              ref={ref}
              bg="skillGrid.background"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width={itemSize}
              height={itemSize}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={variants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.1 },
              }}
              position="relative"
            >
              <Image
                src={item.src}
                alt={item.title || `Item ${index}`}
                objectFit={"cover"}
                width={"100%"}
                height={item.title ? "80%" : "100%"}
              />
              {item.title && (
                <Text mt="8px" fontSize="0.9em" textAlign="center">
                  <Link href={item.link} color="text.accent">
                    {item.title}
                  </Link>
                </Text>
              )}

              {item.status && (
                <Box position={"absolute"} top={"0%"} right={"0%"}>
                  <Badge bg={getStatusColor(item.status)}>{item.status}</Badge>
                </Box>
              )}
            </MotionGridItem>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
