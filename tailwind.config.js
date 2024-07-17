/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            //   backgroundImage: {
            //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            //     'gradient-conic':
            //       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            //   },
            // },
            fontFamily: {
                pretendard: ["Pretendard", "sans-serif"],
                stardom: ["Stardom-Regular", "sans-serif"],
            },
            content: {
                link: 'url("/images/button.png")',
            },
            colors: {
                transparent: "transparent",
                current: "currentColor",
                navy: "#133C55",
                navy1: "#386FA4",
                navy2: "#59A5D8",
                navy3: "#84D2F6",
                navy4: "#91E5F6",
                navy4: "#62BBC1",
                silver: "#B7BDBE",
                payne_gray: "#4F7A87",
                air_force_blue: "#588896",
                cadet_gray: "#a0aeb2",
                cadet_blue: "#829aa1",
                testColor: "#97A0B1",
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
        plugins: [],
    },
}
