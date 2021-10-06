const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Shared',
    description: 'POC React Context, the shared bits',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: '/Users/bernardo/Sites/x-team/poc-react-context/shared/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Shared',
        description: 'POC React Context, the shared bits',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/bernardo/Sites/x-team/poc-react-context/shared',
          templates:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/node_modules/docz-core/dist/templates',
          docz: '/Users/bernardo/Sites/x-team/poc-react-context/shared/.docz',
          cache:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/.docz/.cache',
          app:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/.docz/app',
          appPackageJson:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/package.json',
          appTsConfig:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/tsconfig.json',
          gatsbyConfig:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/gatsby-config.js',
          gatsbyBrowser:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/gatsby-browser.js',
          gatsbyNode:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/gatsby-node.js',
          gatsbySSR:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/gatsby-ssr.js',
          importsJs:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/.docz/app/imports.js',
          rootJs:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/.docz/app/root.jsx',
          indexJs:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/.docz/app/index.jsx',
          indexHtml:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/.docz/app/index.html',
          db:
            '/Users/bernardo/Sites/x-team/poc-react-context/shared/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
