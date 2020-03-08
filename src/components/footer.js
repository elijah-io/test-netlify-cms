// import { Link } from "gatsby"
import React from "react"

// import TransitionLink from "gatsby-plugin-transition-link"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
// https://transitionlink.tylerbarnes.ca/docs/anilink/


const Footer = () => (
  <footer>
    <div className="container">
        <div className="row">
            <div className="col-12">
              <p style={{textAlign: 'center'}}>© {new Date().getFullYear()} Elijah Kleinsmith</p>
            </div>
        </div>
    </div>
  </footer>
)

export default Footer