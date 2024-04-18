/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /border-(blue|purple|green|cyan)-(500|700)/,
      variants: ["hover"],
    },
  ],
};
