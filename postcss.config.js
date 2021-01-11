module.exports = {
  plugins: [
    require("autoprefixer"),
    process.env.NODE_ENV === "production" &&
      require("@fullhuman/postcss-purgecss")({
        content: ["./src/views/**/*.html", "./build/index.html"],
        defaultExtrator: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
  ],
};
