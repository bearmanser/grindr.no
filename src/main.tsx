import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { system } from "./Theme";
import { ComingSoon } from "./pages/ComingSoon";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </StrictMode>
);
