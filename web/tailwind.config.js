const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        blue: {
          bingo: "#1b2c98",
        },
        red: {
          bingo: "#fa3934",
        },
        gray: {
          bingo: "#aaaaaa",
        },
        emerald: {
          bingo: "#1a5e47",
        },
        orange: {
          bingo: "#fd9e28",
        },
      },
      backgroundImage: () => ({
        "bingo-light": "url('/src/assets//img/bg-tranparent-light.svg')",
        "bingo-dark": "url('/src/assets/img/bg-tranparent-dark.svg')",
        "gradient-radial":
          "radial-gradient(circle at 25% 25%, var(--tw-gradient-stops))",
        "gradient-linear":
          "linear-gradient(180deg, rgba(5,150,105,1) 13%, rgba(252,211,77,1) 57%, rgba(220,38,38,1) 90%);",
        iphone: "url('/src/assets/img/bg-iphone.png')",
        "iphone-top": "url('/src/assets/img/bg-iphone-top.png')",
      }),
      backgroundSize: () => ({
        oversized: "auto 1000px",
      }),
      width: {
        23.5: "5.875rem",
      },
      height: {
        23.5: "5.875rem",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "50%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        ripple: {
          "0%": {
            transform: "scale(1)",
            opacity: 0.375,
          },
          "33%": {
            transform: "scale(10)",
            opacity: 0.15,
          },
          "100%": {
            transform: "scale(35)",
            opacity: 0,
          },
        },
      },
      animation: {
        bounce: "bounce 1500ms infinite",
        ripple: "ripple 750ms ease forwards",
      },
    },
  },
  plugins: [],
};
