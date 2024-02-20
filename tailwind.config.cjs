/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'thought-bubble': "url('/my-daily-icon3.png')",
      }
    },
  },
  daisyui: {
    themes: [{
      mytheme: {
        primary: "#1e90ff",
        "primary-content": "#82eefd",
        neutral: "#28231d",
        secondary: "#1f456e",
        "secondary-content": "#3944bc",
        warning: "#ffff9f",
        "warning-content": "#ffffe0",
        success: "#016064",
        info: "#fff",
        accent: "#fff",

      },
    },
  ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};

module.exports = config;
