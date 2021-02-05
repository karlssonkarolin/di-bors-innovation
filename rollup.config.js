import { uglify } from "rollup-plugin-uglify";

export default {
  input: "assets/scripts/main.js",
  plugins: [uglify()],
  output: {
    file: "public/main.js",
    format: "cjs",
  },
};
