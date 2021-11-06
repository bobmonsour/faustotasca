module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });

  // Copy the css/images/js/data to their respective _site dirs
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Shortcode for the current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addFilter("debugger", (...args) => {
    console.log(...args)
    debugger;
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    }
  }
}
