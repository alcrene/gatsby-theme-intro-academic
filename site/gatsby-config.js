module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      }
    },
    {
      resolve: `gatsby-theme-intro-academic`,
      options: {}
    },
  ],
}
