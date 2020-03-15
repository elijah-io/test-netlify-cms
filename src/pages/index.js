import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexHero from "../components/hero"

// import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// https://transitionlink.tylerbarnes.ca/docs/anilink/
import { FaRegClock, FaRegFolder } from 'react-icons/fa';

export const query = graphql`
  query HomePage {
    allMarkdownRemark {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            category
            title
            path
            date
            excerpt
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 2400) {
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
            id
            }
          }
          html
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Helmet>
      <meta property="og:url" content="https://elijah.io" />
      <meta property="og:type" content="website" />
      <meta name="description" content="I'm a digital producer living and working in Kansas City, MO specializing in building and supporting exceptional, high-quality websites and immersive digital experiences." />
      <meta property="og:image" content="https://elijah-io.s3.us-east-2.amazonaws.com/elijah-social-share.jpg" />
      <meta property="og:image:height" content="1200" />
      <meta property="og:image:width" content="630" />
      <meta property="og:title" content="Elijah Kleinsmith – Digtal Producer in Kansas City" />
      <meta property="og:description" content="I'm a digital producer living and working in Kansas City, MO specializing in building and supporting exceptional, high-quality websites and immersive digital experiences." />
      <meta name="twitter:title" content="Elijah Kleinsmith – Digtal Producer in Kansas City" />
      <meta name="twitter:card" contet="summary_large_image" />
    </Helmet>
    <IndexHero />
    <div className="container blogroll">
      <h2 style={{marginBottom: 30}}>Latest Writing</h2>
      <div className="row" style={{marginBottom: '10vw'}}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="col-lg-4 col-md-6" key={node.id} style={{padding: 15}}>
            <div className="col-lg-12 article-card" key={node.id}>
              <AniLink cover to={node.frontmatter.path} direction="left" bg="#EE4E31" duration={0.50}>
                <Img
                  key={node.frontmatter.featuredImage.id}
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                  className="thumbnail"
                  style={{height: '200px'}}
                />
                <h3 dangerouslySetInnerHTML={{ __html: node.frontmatter.title }} className="sans" style={{fontWeight: 700}} />
                <p dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }} style={{marginBottom: 10}} />
                <small><FaRegClock style={{verticalAlign: 'text-top', paddingTop: 1}} /> {node.timeToRead} Minute Read
                &nbsp;<FaRegFolder style={{verticalAlign: 'text-top', paddingTop: 1}} /> {node.frontmatter.category}</small>
              </AniLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)