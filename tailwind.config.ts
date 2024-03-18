import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-chocolate': '#4F4A45',
        'chocolate': '#6C5F5B',
        'carrot': '#ED7D31',
      }
    },
  },
  plugins: [],
};
export default config;
