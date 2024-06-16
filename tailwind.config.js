/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "4xl": ["48px", "58px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        SourceCode: ["Source Code Pro", "monospace"],
        archivoblack: ["Archivo Black", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#f8f9fa",
        black: "#000",
        white: "#fff",
        green: "#16f2b3",
        "shade-green": "#3ccf91",
        "slate-black": "#212529",
        "slate-gray": "#868e96 ",
        "slate-white": "#e5e7eb",
        "linkedin-color": "#0072b1",
        "email-color": "#EA4335",
      },
      boxShadow: {
        xl: "0 0px 10px rgba(0, 0, 0, 0.1)",
        "2xl": "0 0px 20px rgba(0, 0, 0, 0.15)",
        "3xl": "0 0px 30px rgba(0, 0, 0, 0.2)",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #fff 50%, #000 50%)",
      },
      backgroundSize: {
        "200%": "200% 100%",
      },
      backgroundPosition: {
        right: "right",
        left: "left",
      },
      grayscale: {
        50: "50%",
        0: "0%",
      },
    },
  },
  plugins: [],
};
