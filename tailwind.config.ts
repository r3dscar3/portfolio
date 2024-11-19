import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  mode: "jit",
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    fontFamily: {
      rustica: ['rustica', 'sans-serif'],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      title1: ["42px", "46px"],
      title2: ["31px", "35px"],
      title3: ["20px", "22px"],
      title4: ["18px", "20px"],
      subHeadline: ["17px", "19px"],
      body: ["18px", "20px"],
      footnote: ["15px", "18px"],
      compare: ["15px", "15px"],
      caption1: ["14px", "16px"],
      caption2: ["13px", "14px"],
      caption3: ["11px", "13px"],
    },
    extend: {
      backgroundImage: {
        ellipse: "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        nav: "url(/public/images/nav-bg.png)",
      },
      rotate: {
        "45": "45deg",
        "135": "135deg",
      },
      height: {
        "7.5": "30px",
      },
      maxHeight: {
        "2/3": "calc(100vh / 3)",
        "1/2": "calc(100vh / 2)",
      },
      cursor: {
        copy: "copy",
      },
      colors: {
        nrt: {
          blue: {
            150: "#BFE8FD",
          }
        }
      },
      dropShadow: {
        outline: [
          "-1px 1px 0 #FFF",
          "1px 1px 0 #FFF",
          "1px -1px 0 #FFF",
          "-1px -1px 0 #FFF",
        ],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-12deg)" },
          "50%": { transform: "rotate(12deg)" },
        },
        "animate-coin": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.5s ease-in-out",
        coin: "animate-coin 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar-hide")],
} satisfies Config;
