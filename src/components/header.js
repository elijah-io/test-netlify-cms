// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./scss/layout.scss"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import { FaEnvelope } from 'react-icons/fa';

import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header
  style={{
    marginTop: 25,
    marginBottom: 20,
  }}>
    <div className="container" >
      <div className="row">
        <div className="col-9 my-auto">
          <AniLink cover to={`/`} direction="right" bg="#EE4E31" duration={0.50}>
            <Logo />
          </AniLink>
        </div>
        <div className="col-3 my-auto desktop-menu">
          <div style={{textAlign: 'right'}}>
            {/* <AniLink cover to={`/`} direction="left" bg="#EE4E31" duration={0.50}>Testing</AniLink> */}
            <a href="mailto:hi@elijah.io"><p><FaEnvelope style={{verticalAlign: 'text-bottom', marginBottom: 4, fontSize: 14}}/> hi@elijah.io</p></a>
          </div>
        </div>
        <div className="col-3 my-auto mobile-menu">
          <div style={{textAlign: 'right'}}>
            <a href="mailto:hi@elijah.io"><p><FaEnvelope style={{fontSize: 24}}/></p></a>
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header