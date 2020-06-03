module.exports = {
  siteMetadata: {
    title: `Kimchi Blog`,
    description: `Kimchi is a delicious probiotic food. It's spicy, sour, and umami!`,
    author: `@g0byungsoo`,
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
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kimchi Blog`,
        short_name: `Kimchi`,
        start_url: `/`,
        background_color: `#2ECC40`,
        theme_color: `#2ECC40`,
        display: `minimal-ui`,
        icon: `src/images/kimchi.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
