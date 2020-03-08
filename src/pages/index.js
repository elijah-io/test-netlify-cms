import React from "react"
import { graphql } from "gatsby"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
// https://transitionlink.tylerbarnes.ca/docs/anilink/

export const query = graphql`
  query HomePage {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            category
            path
            excerpt
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
          <h2>Posts</h2>
          <div className="container">
            <div className="row">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <div className="col-lg-4" key={node.id}>
                  <AniLink cover to={node.frontmatter.path} direction="left" bg="#EE4E31" duration={0.50}>
                    <h3 dangerouslySetInnerHTML={{ __html: node.frontmatter.title }} />
                    <p dangerouslySetInnerHTML={{ __html: node.frontmatter.excerpt }} />
                  </AniLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)