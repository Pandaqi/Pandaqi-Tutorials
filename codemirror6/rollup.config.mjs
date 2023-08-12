import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from '@rollup/plugin-terser'
export default {
  input: "./editor.js",
  output: {
    file: "./editor.bundle.min.js",
    format: "iife",
    plugins: [terser()]
  },
  plugins: [nodeResolve()],
};