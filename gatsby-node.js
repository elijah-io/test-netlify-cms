const path = require('path');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({actions, graphql}) => {
    const {createPage} = actions;

    const postTemplate = path.resolve(`src/templates/post.js`);

    return graphql(`{
        allMarkdownRemark {
            edges {
                node {
                    id
                    timeToRead
                    frontmatter {
                        category
                        path
                        title
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 2400) {
                                    src
                                    base64
                                    tracedSVG
                                    srcWebp
                                    srcSetWebp
                                    originalImg
                                    originalName
                                    presentationWidth
                                    presentationHeight
                                }
                            }
                        }
                    }
                }
            }
        }
        site {
            siteMetadata {
                url
            }
        }
    }`)
    .then(res => {
        if(res.errors) {
            return Promise.reject(res.errors);
        }
        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}

exports.onCreateNode = ({ node }) => {
    fmImagesToRelative(node);
  };