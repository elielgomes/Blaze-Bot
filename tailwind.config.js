/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			sm: '375px',
			md: '768px',
			lg: '1024px',
			xl: '1440px',
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
		extend: {
			colors: {
				"red": "#CC2843",
				"gray-dark": "#1A242D",
				"blue-dark": "#0F1923",
			},
		},
	},
	plugins: [],
}

//SofiaPro,"Roboto",sans-serif,Nasalization!important;