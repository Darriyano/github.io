import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/script.ts',
    output: { file: 'dist/script.js' },
    plugins: [ nodeResolve({ browser: true }), typescript() ],
};