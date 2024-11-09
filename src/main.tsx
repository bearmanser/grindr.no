import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "./pages/HomePage.tsx";
import { system } from "./Theme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <HomePage />
    </ChakraProvider>
  </StrictMode>
);
