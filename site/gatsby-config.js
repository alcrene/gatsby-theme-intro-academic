module.exports = {
  siteMetadata: {
    description: "Personal page of Jane Doe",
    locale: "en",
    title: "Jane Doe",
  },
  plugins: [
    {
      resolve: "@arene/gatsby-theme-intro-academic",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
        darktheme: "dark-blue"
      },
    },
  ],
}
