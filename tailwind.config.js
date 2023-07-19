/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1420px",
      },
    },
  },
  plugins: [],
};
