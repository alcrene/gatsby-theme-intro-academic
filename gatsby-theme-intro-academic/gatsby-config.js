module.exports = ({
  basePath = "/",
  contentPath = "content/",
  theme = "classic",
  darktheme = "dark-blue",
  lang = null,  // null: Only add the 'lang' tag if it was explicitely given by user
  tailwindConfig = null
}) => {
  const gatsbyThemeConfigPath = require.resolve("@arene/gatsby-theme-intro")
  const gatsbyThemeRoot = gatsbyThemeConfigPath.substring(
    0, gatsbyThemeConfigPath.lastIndexOf("/"))

  return {
    plugins : [
      {
        resolve: "@arene/gatsby-theme-intro",
        options: {
          basePath: basePath,
          contentPath: contentPath,
          theme: theme,
          darktheme: darktheme,
          lang: lang,
          showThemeLogo: false,
          tailwindConfig: {
            darkMode: "class",
            // Include this theme's files among those scanned by Tailwind CSS.
            content: [gatsbyThemeRoot + `/src/**/*.js`,
                      `${__dirname}/src/**/*.{js,jsx}`,
                      `./src/**/*.{js,jsx}`]
          }
        }
      },
      "gatsby-plugin-mdx"
    ]
  }
}
