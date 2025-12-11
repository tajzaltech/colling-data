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
        primary: {
          DEFAULT: '#5ec5cf', // User Requested Teal
          50: '#f2fcfd',
          100: '#eefcfd',
          200: '#cff5f8',
          300: '#a5eaf0',
          400: '#5ec5cf', // Main Color
          500: '#3db0bc',
          600: '#318e9b',
          700: '#2b717c',
          800: '#285d66',
          900: '#254e56',
          foreground: '#ffffff',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
