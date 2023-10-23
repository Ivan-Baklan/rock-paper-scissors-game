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
    },
    fontFamily: {
      sans: ["Barlow Semi Condensed", "sans-serif"],
    },

    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(circle at 50% -50%, var(--tw-gradient-from),var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
