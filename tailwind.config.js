/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
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
      },
      boxShadow: {
        "paper-shadow-outer": "0 8px #0d31e3",
        "paper-shadow-inner": "inset 0 6px 0 #C1C1C1",
        "scissors-shadow-outer": "0 8px #C76C1B",
        "scissors-shadow-inner": "inset 0 6px 0 #C1C1C1",
        "rock-shadow-outer": "0 8px #9F1834",
        "rock-shadow-inner": "inset 0 6px 0 #C1C1C1",
      },
    },
  },
  plugins: [],
};
