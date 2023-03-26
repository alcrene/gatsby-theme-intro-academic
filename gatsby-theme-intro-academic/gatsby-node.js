// `onPreBootstrap` is supposed to check if the `content` folder is empty,
// and if so, copy some default files from the repo.
// PROBLEM: The equivalent function in gatsby-theme-intro gets executed first,
// copies the wrong set of files, and this call does nothing.
// exports.onPluginInit = require("./src/gatsby/node/onPreBootstrap")
exports.createSchemaCustomization = require("./src/gatsby/node/createSchema")
