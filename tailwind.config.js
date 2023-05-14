/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "rgb(68, 38, 242)",
				secondary: "rgb(255, 255, 255)",
				ternary: "rgb(255, 255, 255, 0.5)",
				"primary-bg": "rgb(29, 26, 38)",
			},
		},
	},
	plugins: [],
}
