const { Config } = require("tailwindcss");

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: {
          light: '#f5f5f5',
          dark: '#0a0a0a',
        },
        foreground: {
          light: '#333333',
          dark: '#e5e5e5',
        },
        card: "hsl(0 0% 98%)",
        primary: {
          DEFAULT: "hsl(210 100% 45%)",
          foreground: "hsl(0 0% 100%)",
        },
        muted: {
          DEFAULT: "hsl(210 20% 96%)",
          foreground: "hsl(0 0% 40%)",
        },
        border: "hsl(210 20% 90%)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        // ... other color definitions (add rest from shadcn docs)
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config; 