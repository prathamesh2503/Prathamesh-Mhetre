import purgecss from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    purgecss({
      // Tells PurgeCSS where to look for your used classes
      content: ["./index.html", "./src/**/*.{js,jsx}"],
      // Keeps Bootstrap's core variables and setup intact
      safelist: ["html", "body"],
    }),
  ],
};
