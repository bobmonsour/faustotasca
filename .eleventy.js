module.exports = function(eleventyConfig) {
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });

  // Copy the css/images/js/data to their respective _site dirs
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("_redirects");

  // Shortcode for the current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // eleventyConfig.addFilter("debugger", (...args) => {
  //   console.log(...args)
  //   debugger;
  // });

  eleventyConfig.addFilter("captionLineBreaks", function(caption) {
    return caption.replace(/, -/g, "<br>");
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
