import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Cursor from "./cursor"
import Header from "./header"
import Footer from "./footer"

import 'bootstrap/dist/css/bootstrap-grid.css'
import Particles from "react-particles-js";
import "./scss/layout.scss"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://use.typekit.net/pgi1lzk.css" async="false"></link>
        <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap" rel="stylesheet" async="false"></link>
      </Helmet>
      <Particles
        params={{
          particles: {
            color: {
            value: "#fff"
            },
            number: {
                value: 75,
                density: {
                  enable: true,
                  value_area: 1200,
                }
            },
            line_linked: {
              distance: 125,
              opacity: 0.2

            }
          }
          }}
          style={{
            position: 'fixed',
            zIndex: '-2',
          }}
      />
      <Header />
      <main>{children}</main>
      <Footer />
      <Cursor/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout