import nodeResolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify-es';

export default [{
    input: 'index.js',
    output: {
        extend: true,
        file: 'main.js',
        format: 'cjs'
    },
    plugins: [nodeResolve()]
}, {
    input: 'index.js',
    output: {
        extend: true,
        file: 'main.min.js',
        format: 'cjs'
    },
    plugins: [nodeResolve(), uglify()]
}];