/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"noir-menu": "#040B14",
				"blanc": "#DFE0E0",
				"bleu-clair": "#149DDD",
				"bleu-fonce": "#173B6C",
			}
		},
	},
	plugins: [],
}
