import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "primary-text": "#E8EDDF",
      "secondary-text": "#242423",
      "background": "#333533",
      "accent": "#F5CB5C",
      "shadow": "#242423",
    },
    extend: {
      dropShadow: {
        "md": '5px 7px 0px rgb(36,36,35)',
      },
      boxShadow: {
        "lg": "9px 15px 0px 5px rgb(36,36,35)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
