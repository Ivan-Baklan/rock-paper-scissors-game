/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      red: "#ff0000",
      black: "#000000",
      cello: "#1F3756",
      haiti: "#141539",
      white: "#ffffff",
      "dark-text": "hsl(229, 25%, 31%)",
      "text-score": "hsl(229, 64%, 46%)",
      "pale-sky": "#606e85",
      "buttons-bg": "#E7E7E8",
    },
    fontFamily: {
      sans: ["Barlow Semi Condensed", "sans-serif"],
    },

    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at 50% -50%, var(--tw-gradient-from),var(--tw-gradient-stops))",
        "choice-triangle": "url('./assets/img/bg-triangle.svg')",
        "choice-pentagon": "url('./assets/img/bg-pentagon.svg')",
        "icon-paper": "url('./assets/img/icon-paper.svg')",
        "icon-scissors": "url('./assets/img/icon-scissors.svg')",
        "icon-rock": "url('./assets/img/icon-rock.svg')",
        "icon-spock": "url('./assets/img/icon-spock.svg')",
        "icon-lizard": "url('./assets/img/icon-lizard.svg')",
        "paper-border-gradient":
          "linear-gradient(hsl(230, 89%, 62%),hsl(230, 89%, 65%))",
        "scissors-border-gradient":
          "linear-gradient(hsl(39, 89%, 49%),hsl(40, 84%, 53%))",
        "rock-border-gradient":
          "linear-gradient(hsl(349, 71%, 52%),hsl(349, 70%, 56%))",
        "spock-border-gradient":
          "linear-gradient(hsl(261, 73%, 60%),hsl(261, 72%, 63%))",
        "lizard-border-gradient":
          "linear-gradient(hsl(189, 59%, 53%),hsl(189, 58%, 57%))",
      },
      boxShadow: {
        "paper-shadow-outer": "0 8px #0d31e3",
        "paper-shadow-inner": "inset 0 6px 0 #C1C1C1",
        "scissors-shadow-outer": "0 8px #C76C1B",
        "rock-shadow-outer": "0 8px #9F1834",
        "spock-shadow-outer": "0 8px #5D38A7",
        "lizard-shadow-outer": "0 8px #2C8EAA",
        "big-winner-shadow":
          "0px 0px 0px 80px rgba(255,255,255,0.05),0px 0px 0px 160px rgba(255,255,255,0.05),0px 0px 0px 220px rgba(255,255,255,0.05)",
        "small-winner-shadow":
          "0px 0px 0px 20px rgba(255,255,255,0.05),0px 0px 0px 40px rgba(255,255,255,0.05),0px 0px 0px 60px rgba(255,255,255,0.05)",
      },
      animation: {
        "extend-width": "0.3s linear extend-width",
      },
      keyframes: {
        "extend-width": {
          "0%": { width: "0" },
          "100%": { width: "180px" },
        },
      },
    },
  },
  plugins: [],
};
