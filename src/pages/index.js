import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 style={{fontStyle: 'italic'}}>Elijah Kleinsmith</h1>
          <p>Testing a sentence or two here. Okay, just one. Wait.</p>
        </div>
      </div>
    </div>
    <div className="container blogroll">
      <h2>Latest</h2>
      <div className="row">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="col-lg-4 col-md-6" key={node.id}>
            <AniLink cover to={node.frontmatter.path} direction="left" bg="#EE4E31" duration={0.50}>
              <Img
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                className="thumbnail"
                style={{height: '200px'}}
              />
              <h3 dangerouslySetInnerHTML={{ __html: node.frontmatter.title }} />
              <p dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }} style={{marginBottom: 6}} />
              <small><FaRegClock style={{verticalAlign: 'text-top', paddingTop: 1}} /> {node.timeToRead} Minute Read
              • <FaRegFolder style={{verticalAlign: 'text-top', paddingTop: 1}} /> {node.frontmatter.category}</small>
            </AniLink>
          </div>
        ))}
      </div>
    </div>
  </Layout>
)