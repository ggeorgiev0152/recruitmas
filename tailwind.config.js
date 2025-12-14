/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./{components,pages}/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Unkempt', 'cursive'],
            },
        },
    },
    plugins: [],
}
