import { Box, SimpleGrid, GridItem, Image, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ItemGridProps {
  title: string;
  items: string[];
  itemSize?: string;
}

const MotionGridItem = motion(GridItem);

export function ItemGrid({ title, items, itemSize }: ItemGridProps) {
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
        {items.map((src, index) => {
          const { ref, inView } = useInView({
            threshold: 0.1,
            triggerOnce: false,
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
            >
              <Image
                src={src}
                alt={`Skill ${index}`}
                objectFit="cover"  // Ensures the image covers the entire area
                width="100%"
                height="100%"      // Makes sure the image fills the grid cell
              />
            </MotionGridItem>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
