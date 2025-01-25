import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        background: {
          primary: { value: "#1a1a1a" }, // Main background color
          footer: { value: "#1f1f1f" }, // Footer background color
          overlay: { value: "#0000008d" }, // Overlay color for main image quote
        },
        text: {
          primary: { value: "#ffffff" }, // Primary text color
          accent: { value: "#00adb5" }, // Accent color for headings and links
        },
        skillGrid: {
          background: { value: "#222" }, // Background for skill grid items
        },
        status: {
          green: { value: "#5cbc60" }, // Background for skill grid items
          yellow: { value: "#f8f4ca" }, // Background for skill grid items
          red: { value: "#cd3e4d" }, // Background for skill grid items
        },
      },
      fontSizes: {
        xl: { value: "4.5em" }, // Quote font size
        lg: { value: "2em" }, // Section title font size
        md: { value: "1.2em" }, // Paragraph font size
      },
      sizes: {
        container: { value: "100%" },
        image: { value: "45%" },
        skillItem: { value: "100px" },
      },
    },
  },
});
