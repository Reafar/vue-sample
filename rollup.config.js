import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import vue from 'rollup-plugin-vue';
import buble from '@rollup/plugin-buble';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import cssnano from "cssnano";
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import inject from '@rollup/plugin-inject';

const production = process.argv.includes('--prod');
const development = process.argv.includes('--dev');
const server = process.argv.includes('-w');
const port = 9000;

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: production ? false : 'inline',
        name: 'bundle'
    },
    plugins: [
        alias({
            entries: [{ find: '@', replacement: __dirname + 'src/' }]
        }),
        postcss({ extract: true, plugins: [cssnano()] }),
        nodeResolve({ jsnext: true, browser: true, preferBuiltins: true }),
        json(),
        commonjs(),
        vue({ css: false }),
        replace({ 'process.env.NODE_ENV': '"production"', preventAssignment: true }),
        buble({ exclude: 'node_modules/**' }),
        terser(),
        inject({
            Promise: ['es6-promise', 'Promise']
        }),
        server &&
        serve({
            open: false,
            contentBase: 'dist',
            historyApiFallback: true,
            port
        }),
        server && livereload({ watch: 'dist' })
    ],
    watch: {
        clearScreen: true
    }
}