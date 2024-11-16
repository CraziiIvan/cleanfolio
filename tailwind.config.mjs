import { grayDark, gray, sage, sageDark } from '@radix-ui/colors'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "selector",
	theme: {
		extend: {
			colors: {
				...gray,
				sage: {
					1: sage.sage1,
					2: sage.sage2,
					3: sage.sage3,
					4: sage.sage4,
					5: sage.sage5,
					6: sage.sage6,
					7: sage.sage7,
					8: sage.sage8,
					9: sage.sage9,
					10: sage.sage10,
					11: sage.sage11,
					12: sage.sage12
				},
				sageDark: {
					1: sageDark.sage1,
					2: sageDark.sage2,
					3: sageDark.sage3,
					4: sageDark.sage4,
					5: sageDark.sage5,
					6: sageDark.sage6,
					7: sageDark.sage7,
					8: sageDark.sage8,
					9: sageDark.sage9,
					10: sageDark.sage10,	
					11: sageDark.sage11,
					12: sageDark.sage12
				}
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
