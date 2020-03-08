import React from "react"
import { graphql } from "gatsby"
import moment from "moment/moment"
// import Helmet from 'react-helmet';
import Layout from "../components/layout.js"
import Helmet from "react-helmet"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} – Elijah Kleinsmith`}>
        <meta name="description" content={post.frontmatter.excerpt} />
        <meta property="og:image" content={post.frontmatter.featuredImage.childImageSharp.fluid.src} />
        <meta property="og:image:height" content={post.frontmatter.featuredImage.childImageSharp.fluid.presentationHeight} />
        <meta property="og:image:width" content={post.frontmatter.featuredImage.childImageSharp.fluid.presentationWidth} />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.frontmatter.excerpt} />
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta name="twitter:card" contet="summary_large_image" />
      </Helmet>
      <div className="post">
        <div
          style={{
            background: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${post.frontmatter.featuredImage.childImageSharp.fluid.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container">
            <div className="row" style={{ height: "40vh" }}>
              <div className="col-12 my-auto">
                <h1
                  dangerouslySetInnerHTML={{ __html: post.frontmatter.title }}
                  style={{ margin: 0, textAlign: "center" }}
                />
                <p style={{ textAlign: "center" }}>
                  Posted on{" "}
                  {moment(post.frontmatter.date).format("MMMM D, YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{
            marginTop: "5vh",
            marginBottom: "5vh",
          }}
        >
          <div className="row">
            <div className="col-12" style={{ maxWidth: 650, margin: "0 auto" }}>
              <p
                dangerouslySetInnerHTML={{ __html: post.html }}
                style={{
                  lineHeight: 1.5,
                  marginLeft: 15,
                  marginRight: 15,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        category
        title
        path
        date
        excerpt
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 2400) {
              src
              srcWebp
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
`