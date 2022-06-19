import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			importer: (url) => {
				if (url[0] === '~') {
					url = path.resolve('node_modules', url.substr(1))
				}
				return { file: url }
			},
		},
	}),

	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'@components': path.resolve('./src/routes/components'),
				},
			},
		},

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE'],
		},
	},
}

export default config
