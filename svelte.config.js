import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import Unocss from 'unocss/vite';
import { presetTypography, presetIcons, presetUno } from 'unocss';
import { extractorSvelte } from '@unocss/core';
import transformerDirective from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerCompileClass from '@unocss/transformer-compile-class';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				Unocss({
					extractors: [extractorSvelte],
					presets: [presetUno(), presetTypography(), presetIcons({ scale: 1.75 })],
					transformers: [
						transformerDirective(),
						transformerVariantGroup(),
						transformerCompileClass()
					]
				})
			]
		}
	}
};

export default config;
