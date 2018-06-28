import alias from "rollup-plugin-alias";
// import babel from "rollup-plugin-babel";
import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import eslint from "rollup-plugin-eslint";
import resolve from "rollup-plugin-node-resolve";
import postcss from "rollup-plugin-postcss";
import svelte from "rollup-plugin-svelte";
// import uglify from "rollup-plugin-uglify";
import sass from "node-sass";

import pkg from "./package.json";
const production = !process.env.ROLLUP_WATCH;
console.log("rollup watch: ", production);
export default {
  input: "src/main.js",
  output: [
    {
      sourcemap: true,
      format: "iife",
      name: "app",
      file: pkg.main
    },
    {
      sourcemap: true,
      format: "es",
      name: "app",
      file: pkg.module
    }
  ],
  plugins: [
    eslint({
      include: ["./src/**/*.js"]
    }),
    // enable tree shaking - per https://fontawesome.com/how-to-use/use-with-node-js#ConfiguringRollupfortreeshaking
    alias({
      "@fortawesome/fontawesome-free-solid":
        "node_modules/@fortawesome/fontawesome-free-solid/shakable.es.js"
    }),
    svelte({
      // enable run-time checks when not in production
      dev: !production
    }),
    postcss({
      extensions: [".css", ".scss"],
      // `extract: false` will automatically inject all styles into <head> tag
      extract: "./public/css/bundle.css"
      // modules: true
    }),
    // babel({
    //   exclude: "node_modules/**",
    //   runtimeHelpers: true
    // }),
    resolve(),
    commonjs({
      include: "node_modules/**"
    }),
    production && buble({ exclude: "node_modules/**" })
    // production && uglify.uglify()
  ]
};
