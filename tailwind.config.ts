import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#E9F5DB',
        'sage-100': '#CFE1B9',
        'sage-200': '#B5C99A',
        'sage-300': '#97A97C',
        'sage-400': '#87986A',
        'sage-500': '#718355',
        'off-white': '#F8F8F6',
        charcoal: '#1A1A1A',
        'charcoal-light': '#2D2D2D',
        gray: '#6B6B6B',
      },
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
