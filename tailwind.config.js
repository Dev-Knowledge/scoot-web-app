export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monospace: ["Space Mono", "monospace"],
        Lexend: ["Lexend Deca", "sans-serif"],
      },
      screens: {
        xs: "320px",
        md: "768px",
        lg: "1024px",
        "2xl": "1440px",
      },
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: "-0.89px",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
    scale: {
      "-1": "-1",
    },
  },
  plugins: [],
};
