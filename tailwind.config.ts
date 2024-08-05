import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "primary": "#4CAF4F",
        "silver": "#F5F7FA",
        "Gray_blue": "#ABBED1",
        "l_gray": "#89939E",
        "Gray": "#717171",
        "D_gray":"#4D4D4D",
        "black":"#263238",
        "info":"#2194F3",
        "secondary": "#263238",
        
      },
    },
  },
  plugins: [],
};
export default config;
