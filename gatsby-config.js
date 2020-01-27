module.exports = {
  siteMetadata: {
    title: `Danielshow Portfolio`,
    description: `My Portfolio, I am a nerd. I am a Javascript, Rails and Python Developer. I bui,ld things for fun.`,
    author: `@danielshow`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
     resolve: 'gatsby-plugin-mdx',
     options: {
      extensions: [`.mdx`, `.md`],
      defaultLayouts: {
        default: require.resolve('./src/components/layout.js'),
      },
      gatsbyRemarkPlugins: [{resolve: 'gatsby-remark-images'}]
    }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
