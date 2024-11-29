/** @type {import('tailwindcss').Config} */
module.exports = {
	prefix: 'tw-',
	important: false,
	content: [
		"./index.html{html, jsx, js}",
		"./src/tailwind.css",
		"./src/tailwind-build.css",
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: "#c490ff",
				secondary: "#6c72e8", 
			}
		},
	},
	plugins: [],
}

