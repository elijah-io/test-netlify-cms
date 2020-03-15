import React from "react"
import { graphql } from "gatsby"
import moment from "moment/moment"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import { FaRegCalendar, FaRegClock } from 'react-icons/fa';

export default function Template({ data }) {
  const { markdownRemark: post } = data
  const { site: global } = data
  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title} | Elijah Kleinsmith`}>
        <meta property="og:url" content={`${global.siteMetadata.url}${post.frontmatter.path}`} />
        <meta property="og:type" content="website" />
        <meta name="description" content={post.frontmatter.excerpt} />
        <meta property="og:image" content={`${global.siteMetadata.url}${post.frontmatter.featuredImage.childImageSharp.fluid.src}`} />
        <meta property="og:image:height" content={post.frontmatter.featuredImage.childImageSharp.fluid.presentationHeight} />
        <meta property="og:image:width" content={post.frontmatter.featuredImage.childImageSharp.fluid.presentationWidth} />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:description" content={post.frontmatter.excerpt} />
        <meta name="twitter:title" content={post.frontmatter.title} />
        <meta name="twitter:card" contet="summary_large_image" />
      </Helmet>
      <div className="post" style={{background: '#04151F', borderBottom: 'solid 5px #EE4E31'}}>
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
              </div>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{
            paddingTop: "5vh",
            paddingBottom: "5vh"
          }}
        >
          <div className="row">
            <div className="col-12" style={{ maxWidth: 650, margin: "0 auto" }}>
              <p style={{lineHeight: 1.1}}>
                <small>
                  <FaRegCalendar style={{fontSize: 11}}/> Published{" "} {moment(post.frontmatter.date).format("MMMM D, YYYY")}<br />
                  <FaRegClock style={{fontSize: 11}}/> {post.timeToRead} Minute Read  
                </small>
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: post.html }}
                style={{
                  lineHeight: 1.5,
                  fontSize: 20,
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
              src
              srcWebp
              presentationWidth
              presentationHeight
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
    site {
      siteMetadata {
        url
      }
    }
  }
`