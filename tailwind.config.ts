import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
      backgroundSize: {
        "size-200": "200% 100%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 0%",
      },
      boxShadow: {
        gentle: "0 4px 20px -2px rgba(0, 0, 0, 0.1)",
        "gentle-hover": "0 8px 30px -2px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
