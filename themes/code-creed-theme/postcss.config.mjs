export const plugins = [
  require("postcss-import")({
    paths: ["./node_modules"],
  }),
  require("autoprefixer"),
  require("cssnano")({ preset: "default" }),
];
