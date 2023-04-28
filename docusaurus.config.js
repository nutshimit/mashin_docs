// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mashin Wiki",
  tagline:
    "The hub for those interested in learning, building, or running Mashin",
  url: "https://docs.mashin.land",
  titleDelimiter: "·",
  baseUrl: "/",

  trailingSlash: false,
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  onDuplicateRoutes: "log",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "nutshimit", // Usually your GitHub org/user name.
  projectName: "mashin_docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  scripts: [
    "https://buttons.github.io/buttons.js",
    "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.js",
    "https://unpkg.com/aos@next/dist/aos.js",
    "../js/custom.js",
    "../js/clipboard.min.js",
    "../js/copycode.js",
  ],
  stylesheets: [
    "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css",
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap",
    "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css",
    "https://unpkg.com/aos@next/dist/aos.css",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          editUrl: ({ docPath }) =>
            `https://github.com/nutshimit/mashin_docs/edit/dev/docs/${docPath}`,
          path: "./docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "docs",
          remarkPlugins: [],
        },
        theme: {
          customCss: [
            require.resolve("./static/css/custom.css"),
            require.resolve("./static/css/copycode.css"),
            require.resolve("./static/css/socicon.css"),
          ],
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
    },
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: "bottom",
    },
    navbar: {
      logo: {
        src: "img/Mashin_Logo_Horizontal_Green-Black.svg",
      },
      items: [
        {
          to: "docs/getting-started",
          label: "Get Started",
          position: "right",
        },
        {
          to: "docs/learn/learn-architecture",
          label: "Learn",
          position: "right",
        },
        {
          to: "docs/build-index",
          label: "Build",
          position: "right",
        },
        {
          type: "search",
          position: "right",
        },
        {
          to: "docs/contributing",
          label: "Contribute",
          position: "right",
        },
      ],
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Nutshimit`,
      logo: {
        src: "img/Mashin_Logo_Horizontal_White.svg",
      },
    },
    algolia: {
      appId: process.env.app_id,
      apiKey: process.env.api_key,
      indexName: "mashin",
      contextualSearch: true,
    },
    docsSideNavCollapsible: true,
  },
};

module.exports = config;
