import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import IndexHero from "../components/hero"

import Particles from "react-particles-js";
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
                  ...GatsbyImageSharpFluid_withWebp
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
    <Particles
      params={{
        particles: {
          color: {
          value: "#c8008c"
          },
          number: {
              value: 75
          }
        }
        }}
        style={{
          position: 'fixed',
          zIndex: 0,
        }}
    />
    <SEO title="Home" />
    <IndexHero />
    <div className="container blogroll">
      <h2>Latest</h2>
      <div className="row">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div className="col-lg-4 col-md-6" key={node.id}>
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
        ))}
      </div>
    </div>
  </Layout>
)