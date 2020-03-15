module.exports = {
  siteMetadata: {
    title: `Elijah Kleinsmith`,
    description: `Elijah specializes in building and supporting exceptional, high-quality websites and immersive digital experiences.`,
    url: `https://elijah.io`,
    author: `@elijah-io`,
    image: `https://elijah-io.s3.us-east-2.amazonaws.com/elijah-social-share-v3.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: 'tech',
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
                resolve: `gatsby-remark-images`,
                options: {
                    maxWidth: 1200,
                },
            },
            {
              resolve: `gatsby-remark-external-links`,
              options: {
                target: "_blank",
                rel: "nofollow noopener"
              }
            },
          ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'pgi1lzk'
        },
        google: {
          families: ['Source Code Pro']
        }
      }
    },
    // `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-scroll-indicator`,
      options: {
        color: '#EE4E31',
        height: '5px',
        paths: ['/politics/*', '/tech/*'],
        zIndex: `2`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#04151F`,
        theme_color: `#EE4E31`,
        display: `minimal-ui`,
        icon: `src/images/elijah-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
