// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./scss/layout.scss"

import AniLink from "gatsby-plugin-transition-link/AniLink"
// import Burger from '@animated-burgers/burger-squeeze' 
// import '@animated-burgers/burger-squeeze/dist/styles.css' 
// import '@animated-burgers/burger/styles.scss' 

import Logo from "./logo"

const Header = ({ siteTitle }) => (
  <header
  style={{
    marginTop: 25,
    marginBottom: 25,
  }}>
    <div className="container" >
      <div className="row">
        <div className="col-9">
          <AniLink cover to={`/`} direction="right" bg="#EE4E31" duration={0.50}>
            <Logo />
          </AniLink>
        </div>
        <div className="col-3 my-auto desktop-menu">
          <div style={{textAlign: 'right'}}>
            <AniLink cover to={`/`} direction="left" bg="#EE4E31" duration={0.50}>Testing</AniLink>
          </div>
        </div>
        <div className="col-3 my-auto mobile-menu">
          <div style={{textAlign: 'right', marginTop: '-13px'}}>
            {/* <Link to="/" style={{fontSize: 40}}></Link> */}
            {/* <Burger Component="button" type="button" /> */}
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