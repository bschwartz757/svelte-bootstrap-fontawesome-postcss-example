import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import buble from "rollup-plugin-buble";
import alias from "rollup-plugin-alias";
import uglify from "rollup-plugin-uglify";
import postcss from "rollup-plugin-postcss";
import sass from "node-sass";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/js/bundle.js"
  },
  plugins: [
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
      extensions: [".css", ".scss"]
    }),
    resolve(),
    commonjs(),
    production && buble({ exclude: "node_modules/**" }),
    production && uglify()
  ]
};
