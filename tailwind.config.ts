import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "banner": "url('/img/banner.jpg')",
            },
            fontFamily: {
                bodoni: ['var(--font-bodoni)'],
            },
            colors: {
                textBio: "#2E2E2E",
                icone: "#555555",
                midia: "#F4F1EF",
                convite: "#555555",
                marrom: {
                    "500": "#5C2700"
                },
                bordaAgenda: "#D2D2D2",
                efeito: "#707070",
                contato: "#B6B29D",
                blue: {
                    "500": "#21406F",
                    "600": "#11204F",
                },
            },
        },
    },
    plugins: [],
};
export default config;
