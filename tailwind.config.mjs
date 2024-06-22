/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "selector",
	theme: {
		extend: {
			fontFamily: {
				"primary":  ["General Sans", "Inter"],
				"highlight":  ["Lora", "serif"],
			}
		},
	},
	plugins: [],
}
