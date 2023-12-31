/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				bleed: "0 99.3vmax 0 100vmax #E9E6DD",
			},
			backgroundColor: {
				primary: "#4FA5D8",
				secondary: "#00457E",
				main: "#E9E6DD",
			},
			textColor: {
				primary: "#00457E",
			},
		},
	},
	plugins: [],
};
