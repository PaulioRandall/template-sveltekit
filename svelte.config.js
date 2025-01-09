import adapter from '@sveltejs/adapter-auto'
import path from 'path'

import P69 from '@paulio/p69-svelte'
import tokens from './src/tokens.js'

if (process.env.NODE_ENV === 'development') {
	P69.watch(tokens)
} else {
	await P69.file(tokens)
}

export default {
	kit: {
		adapter: adapter(),
		alias: {
			//$lib: path.resolve('./src/lib'),
		},
	},
	preprocess: [P69.svelte(tokens)],
}
