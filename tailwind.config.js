/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./*.html",
        "./src/**/*.{html,js}",
    ],

    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
            },
        },

        extend: {
            colors: {
                primary: "#D8FB78",
                dark: "#0F0F0F",
                grayText: "#09080FB2",
            },

            fontFamily: {
                sans: ["Inter", "sans-serif"],
                poppins: ["Poppins", "sans-serif"],
            },
        },
    },

    plugins: [],
};
