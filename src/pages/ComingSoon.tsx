import { Box, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export function ComingSoon() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Box
            bg={"background.primary"}
            color={"text.primary"}
            minH={"100vh"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            w={"100vw"}
        >
            <Heading fontSize={"3xl"}>Brace Yourself for Brilliance</Heading>
            <Text fontSize={"lg"}>The internet’s finest webpage will launch in {count} seconds!</Text>
        </Box>
    );
}
