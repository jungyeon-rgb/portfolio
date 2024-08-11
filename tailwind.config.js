/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
        stardom: ["Stardom-Regular", "sans-serif"],
        cooper_black: ["Cooper-Black-Regular", "serif"],
        meongi_white: ["Cafe24Meongi-W-v1.0", "Pretendard"],
        kimjungchul: ["KimjungchulMyungjo", "serif"],
        tokki: ["HSSanTokki20", "Pretendard"],
      },
      fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      content: {
        link: 'url("/images/button.png")',
      },
      colors: {
        navy: {
          DEFAULT: "#133C55",
          1: "#386FA4",
          2: "#59A5D8",
          3: "#84D2F6",
          4: "#91E5F6",
          5: "#62BBC1",
        },
        silver: "#B7BDBE",
        payne_gray: "#4F7A87",
        air_force_blue: "#588896",
        cadet_gray: "#a0aeb2",
        cadet_blue: "#829aa1",
        testColor: "#97A0B1",
        backgroundColor: {
          blue: "#7297B2",
          pink: "#E4D0D9",
        },
        dark_pink: "#C5A1C3",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate: "rotate 1s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
