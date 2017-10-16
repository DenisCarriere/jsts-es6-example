import nodeResolve from 'rollup-plugin-node-resolve';

export default {
    input: 'index.js',
    output: {
        extend: true,
        file: 'main.js',
        format: 'cjs'
    },
    plugins: [nodeResolve()]
};