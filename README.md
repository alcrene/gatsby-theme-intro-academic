<p align="center">
  <a href="https://arene.ca">
    <img alt="AR" src="./site/content/images/AR-logo.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Alexandre René's personal website
</h1>

Personal website, based on Wojciech Kocjan's [intro](https://github.com/wkocjan/gatsby-theme-intro) Gatsby template. This repo is the entire project, including both theme dependencies and the website itself. The file structure is that suggested by the [Gatsby starter workspace](https://github.com/gatsbyjs/gatsby-starter-theme-workspace).

## 🚀 Recommended installation

This is how I set up my development installation at the time of writing. It's a standard Gatsby structure for theme plugins, so if you already know your way around a Gatsby web site, you should be able to follow your usual procedure.

- Prerequisites (skip this if this is not your first Gatsby site)
  + Install Yarn. ([Instructions in Gatsby docs](https://www.gatsbyjs.com/docs/glossary/yarn/)
  + Install Gatsby. (Either through Yarn following the Yarn page above, or through npm following [step 0 of the Gatsby tutorial](https://www.gatsbyjs.com/docs/tutorial/part-0/).)

- Clone this project repo
  ```shell
  git clone https://github.com/alcrene/portfolio.git
  ```

- Optionally copy or hard link (symlinks don't work !) a local copy of *gatsby-theme-intro* at the location `portfolio/gatsby-theme-intro`.
  TODO: Change dependencies in *package.json* files so that this is actually optional.

- `cd portfolio` into the new website project.

- Add the following line to `.yamrc.yml`:
  ```
  nodeLinker: node-modules
  ```
  At the time of writing (Dec 2022), this was still required for Gatsby plugins to be found.

- Install with Yarn ([the first line](https://yarnpkg.com/getting-started/migration/#step-by-step) ensures you aren't running the legacy v1 version of Yarn; you need at least v2 for the build to work). 
  ```shell
  yarn set version berry
  yarn install
  ```

- Launch the website locally for development

  ```shell
  yarn develop
  ```

**Hint**: If you have trouble getting Yarn to use your local dependencies, make sure you are not running the legacy yarn v1. Remember that if you delete the `.yarn` directory, you need to run `yarn set version berry` again.

## Updating content

All content is located under `site/content`. Add/update files to suit your needs.

## Layout

Customizations to the *intro* theme are in `gatsby-theme-intro-academic`.
This is a Gatsby theme, which itself depends on *@wkocjan/gatsby-theme-intro*.
The actual personal website is in `site`.

All of this is managed with [yarn workspaces](https://yarnpkg.com/features/workspaces/), which allows nested packages and gives them higher priority when installing within the workspace.

```text
.
├── gatsby-theme-intro (external)
│   └── <many files>
├── gatsby-theme-intro-academic
│   ├── README.md
│   ├── gatsby-config.js
│   ├── index.js
│   └── package.json
├── site
│   ├── README.md
│   ├── gatsby-config.js
│   ├── package.json
│   ├── src
│   │   └── pages
│   │       └── <single pages>
│   └── content
│       ├── images
│       │   ├── AR-logo.svg
│       │   ├── profile.jpg
│       │   └── <other images>
│       ├── profile.yaml
│       ├── projects.yaml
│       ├── social.yaml
│       └── work-history.yaml
├── README.md
├── .gitignore
├── package.json
└── yarn.lock

```

### `gatsby-theme-intro`

This is an [external dependency](https://github.com/alcrene/gatsby-theme-intro) which I include in the project if I need to make fixes which could eventually be pushed upstream.
Including it as a workspace avoids the need to reinstall everything for Gatsby to pick up changes.
(Workspaces are added as symlinks to `node_modules`.)

### `gatsby-theme-intro-academic`

The site's theme. It customizes *gatsby-theme-intro* (using [component shadowing](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/)), in particular to make it more suited to a academic portfolio.

Peer dependencies are the usual for a theme (*gatsby*, *react*, *react-dom*), plus *gatsby-theme-intro*.

### `site`

The actual personal website. It installs `gatsby-theme-intro` and `gatsby-theme-intro-academic` as dependencies, giving precedence to the latter.

- `site/`
  - `gatsby-config.js`: Specifies which theme to use and any other one-off config.
  - `src/`: Source code such as one-off pages or components that are too specific to include in the theme.
  - `content`: This is where the *gatsby-theme-intro* theme looks for the content.
    Each yaml file corresponds to a type in `gatsby-theme-intro/src/types`.

You can run the site locally with:

```shell
yarn develop
```

which is an alias for `yarn workspace site develop`.
To use the production builder (which serves faster but builds slower and without development features), instead run:

```shell
yarn build
```

To clear Gatsby's cache (which resolve unexplainable errors after changing code files), run

```shell
yarn clean
```


## Troubleshooting

- If the console reports an error like

  ```
  warn The GraphQL query in the non-page component
  "/path/to/portfolio/gatsby-theme-intro/src/templates/index.js" will not be run.
  ```
  
  the most likely explanation is that a javascript error is occurring inside the `createPages` step.
  (Within the call chain `gatsby-theme-intro/gatsby-node` -> `gatsby-theme-intro/src/gatsby/node/createPages.js`
  -> `gatsby-theme-intro/src/templates/index.js`.)  
  Possible reasons include a missing package or a failing query
  (to test if it is a query, try pasting the query in `index.js` into `http://localhost:8000/___graphql`
  and see if the result is as you would expect.)

  **Important** After fixing the issue, you need to run `yarn clean` to clear Gatsby's cache.
  Just stopping and starting the server is often not enough.