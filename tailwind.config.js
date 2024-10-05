/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        breadcrumb: "url(./assets/Images/breadcrumb-bg.png)",
      },
      colors: {
        black: "#000",
        "gray-900": "#3A4246",
        "blue-900": "#1f69dc",
        blue: "#4A86E1",
        "blue-100": "#93b8eb",
        gray: "#c6d2d2",
        white: "#fff",
      },
      screens: {
        sm: "560px",
        md: "768px",
        xlg: "992px",
        lg: "1024px",
        xl: "1200px",
      },
      boxShadow: {
        "3xl": "0px -2px 700px 0px rgba(0,0,0,0.75)",
      },
    },
  },
  plugins: [],
};
