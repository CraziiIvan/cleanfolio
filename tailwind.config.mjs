import { grayDark } from '@radix-ui/colors'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "selector",
	theme: {
		extend: {
			colors: {
				...grayDark,
			},
			fontFamily: {
				sans: ["Inter", "Noto Sans Myanmar", "Geist Sans", "sans-serif"],
				serif: ["Lora", "Newsreader", "Noto Serif Myanmar", "serif"],
				mono: ["Geist Mono", "monospace"],
			}
		},
	},
	plugins: [require("@tailwindcss/typography")],
}
