// import { Link } from "gatsby"
import React from "react"

// import TransitionLink from "gatsby-plugin-transition-link"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
// https://transitionlink.tylerbarnes.ca/docs/anilink/

const IndexHero = () => (
  <footer>
    <div className="container">
        <div className="row" style={{height: '77vh'}}>
            <div className="col-md-10 col-s-12 my-auto" style={{margin: '0 auto'}}>
                <p className="special" style={{color: '#EE4E31',}}>Hi, my name is</p>
                <h1 style={{fontStyle: 'italic', marginTop: 0}}>Elijah Kleinsmith</h1>
                {/* <hr style={{maxWidth: 475, margin: 0}}/> */}
                <p style={{maxWidth: 575, marginTop: '1.5vw', fontSize: 'calc(0.8rem + 0.7vw)', marginLeft: 2, marginBottom: 30}}>
                I'm a digital producer living and working in Kansas City, MO
                specializing in building and supporting exceptional,
                high-quality websites and immersive digital experiences.
                </p>
                <button
                    className="special"
                    style={{
                        padding: '12px 30px',
                        fontSize: 14,
                        backgroundColor: 'transparent',
                        color: '#EE4E31',
                        borderColor: '#EE4E31',
                        textTransform: 'uppercase',
                    }}
                >
                    Get In Touch
                </button>
            </div>
        </div>
    </div>
  </footer>
)

export default IndexHero