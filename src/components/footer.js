// import { Link } from "gatsby"
import React from "react"

// import TransitionLink from "gatsby-plugin-transition-link"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
// https://transitionlink.tylerbarnes.ca/docs/anilink/

import { FaRegCopyright, FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = () => (
  <footer>
    <div className="container">
        <div className="row">
            <div className="col-12">
              <p style={{textAlign: 'center', marginBottom: 5}}><FaRegCopyright style={{fontSize: 12}} /> {new Date().getFullYear()} Elijah Kleinsmith</p>
              <p style={{textAlign: 'center', marginTop: 5}}>
                <a href="https://www.facebook.com/elijah.io" target="_blank" rel="noreferrer noopener"><FaFacebookSquare style={{marginRight: 15}} /></a>
                <a href="https://twitter.com/elijah_io" target="_blank" rel="noreferrer noopener"><FaTwitter style={{marginRight: 15, fontSize: 16}} /></a>
                <a href="https://www.instagram.com/elijah.io" target="_blank" rel="noreferrer noopener"><FaInstagram style={{marginRight: 0}} /></a>
              </p>
            </div>
        </div>
    </div>
  </footer>
)

export default Footer