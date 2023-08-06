module.exports = function (eleventyConfig) {
  // Copy these dirs and files to their respective _site dirs
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("yandex_16ac9ffcc8cf6f38.html");

  // Shortcode for the current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // eleventyConfig.addFilter("debugger", (...args) => {
  //   console.log(...args)
  //   debugger;
  // });

  eleventyConfig.addFilter("captionLineBreaks", function (caption) {
    return caption.replace(/, -/g, "<br>");
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
      layouts: "_layouts",
      data: "_data",
    },
  };
};
