// uno.config.ts
import { defineConfig, presetUno, presetWebFonts } from "unocss";

export default defineConfig({
  content: {
    filesystem: [
      // Narrow scope to specific directories
      "src/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}}",
      "src/components/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}}",
      "src/pages/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}}",
      "src/layouts/**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}}"
    ],  },
  theme: {
    boxShadow: {
      custom: `2px 2px 0`,
      "custom-hover": `1px 1px 0`,
    },
    fontFamily: {
      sans: ["CabinetGrotesk", "Satoshi"],
    },
    gridTemplateRows: {
      "auto-250": "repeat(auto-fill, 250px)",
    },
    gridTemplateColumns: {
      "4-minmax": "repeat(4, minmax(150px, 1fr))",
    },
    colors: {
      gray: {
        50: "#FAFAFA",
        100: "#F5F5F5",
        200: "#E5E5E5",
        300: "#D4D4D4",
        400: "#A3A3A3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      darkslate: {
        50: "#3D3D3D",
        100: "#2C2C2C",
        200: "#262626",
        300: "#202020",
        400: "#1A1A1A",
        500: "#171717" /* Exactly your example for the background */,
        600: "#141414",
        700: "#111111",
        800: "#0E0E0E",
        900: "#0B0B0B" /* Deeper and darker */,
      },
      primary: {
        100: "#D1E5F6",
        200: "#A3CBED",
        300: "#75B1E4",
        400: "#4797DB",
        500: "#1A7DD2", // 主色调
        600: "#1670BD",
        700: "#1263A8",
        800: "#0F5693",
        900: "#142651",
      },
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: ["Cabinet Grotesk", "Satoshi"],
        serif: "Zodiak",
      },
    }),
  ],
});
