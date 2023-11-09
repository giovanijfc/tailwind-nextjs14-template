import type { Config } from "tailwindcss";

import { breakpoints } from "./src/core/styles/breakpoints";
import { colors } from "./src/core/styles/colors";
import { fontFamily } from "./src/core/styles/fontFamily";
import { fontSize } from "./src/core/styles/fontSize";
import { fontWeight } from "./src/core/styles/fontWeight";
import { radii } from "./src/core/styles/radii";
import { shadows } from "./src/core/styles/shadows";
import { spaces } from "./src/core/styles/spaces";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: colors,
    fontSize: fontSize,
    space: spaces,
    margin: spaces,
    padding: spaces,
    gap: spaces,
    borderRadius: radii,
    boxShadow: shadows,
    screens: breakpoints,
    fontFamily: fontFamily,
    fontWeight: fontWeight,
  },
  plugins: [],
};

export default config;
