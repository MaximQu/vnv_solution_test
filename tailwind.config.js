/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    future: {
		hoverOnlyWhenSupported: true,
	},
    theme: {
        extend: {
            container: {
                center: true,
                padding: "1rem",
                screens: {
                    "3xs": "320px",
                    "2xs": "375px",
                    xs: "480px",
                    sm: "575px",
                    md: "768px",
                    lg: "991px",
                    xl: "1040px",
                    // "2xl": "1399px",
                },
            },
            screens: {
                "3xs": "320px",
                "2xs": "375px",
                xs: "480px",
                sm: "575px",
                md: "768px",
                lg: "991px",
                xl: "1040px",
                // "2xl": "1399px",
            },
            fontFamily: {
                'ibmPlexMono': ['IBM Plex Mono', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                primary: "#030305",
                blue:"#00BCD4"
            },
        },
    },
    plugins: [],
}