import { gray } from '@radix-ui/colors'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "selector",
	theme: {
		extend: {
			colors: {
				...gray,
			},
			fontFamily: {
				sans: ["Inter", "Noto Sans Myanmar", "Newsreader", "sans-serif"],
				serif: ["Lora", "Newsreader", "Noto Serif Myanmar", "serif"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
