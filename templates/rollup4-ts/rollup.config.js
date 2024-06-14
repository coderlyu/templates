import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve' // 你的包用到第三方npm包
import terser from '@rollup/plugin-terser'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import { dts } from 'rollup-plugin-dts'
import eslint from '@rollup/plugin-eslint'

const plugins = (isPlugin = false) => {
	return [
		commonjs(),
		resolve(),
		isPlugin
			? null
			: postcss({
					extract: 'index.css',
					minimize: true,
					plugins: [autoprefixer],
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  }),
		typescript({ tsconfig: './tsconfig.json' }),
		babel({ babelHelpers: 'bundled' }),
		eslint({
			include: ['src/**/*.ts', 'preview/**/*.ts', 'test/**/*.ts'],
		}),
		// terser(),
	].filter(Boolean)
}

const external = []

export default [
	{
		input: './src/index.ts',
		output: [
			{
				file: 'lib/index.cjs',
				format: 'cjs',
				name: 'MyLibrary',
				exports: 'named',
			},
			{
				file: 'lib/index.esm.js',
				format: 'es',
			},
			{
				file: 'lib/index.umd.js',
				format: 'umd',
				name: 'MyLibrary',
				exports: 'named',
			},
		],
		plugins: plugins(),
		external,
	},
	// 插件
	{
		input: './src/plugins/html.ts',
		output: [
			{
				file: 'lib/plugins/html.cjs',
				name: 'HtmlPlugin',
				format: 'cjs',
			},
			{
				file: 'lib/plugins/html.esm.js',
				name: 'HtmlPlugin',
				format: 'es',
			},
			{
				file: 'lib/plugins/html.umd.js',
				name: 'HtmlPlugin',
				format: 'umd',
			},
		],
		plugins: plugins(),
		external,
	},
	// dts，生成types，package.json（typings / types）
	{
		input: './src/index.ts',
		output: {
			file: 'types/index.d.ts',
			format: 'es',
		},
		plugins: [
			postcss({
				extract: 'none.css',
				minimize: true,
				plugins: [autoprefixer],
			}),
			dts(),
		],
	},
]
