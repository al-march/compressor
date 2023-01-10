/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			'corporate',
			{
				night: {
					"primary": "#4ea8b2",
					"secondary": "#4ac9b4",
					"accent": "#701a75",
					"neutral": "#191C24",
					"base-100": "#101112",
					"info": "#6398D9",
					"success": "#66EAB5",
					"warning": "#FCB24A",
					"error": "#E97290",
				},
			},
		]
	}
}
