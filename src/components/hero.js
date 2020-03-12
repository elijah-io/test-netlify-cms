// import { Link } from "gatsby"
import React from "react"

// import TransitionLink from "gatsby-plugin-transition-link"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
// https://transitionlink.tylerbarnes.ca/docs/anilink/

const IndexHero = () => (
  <footer>
    <div className="container">
        <div className="row" style={{height: '77vh'}}>
            <div className="col-md-12 col-s-12 my-auto" style={{margin: '0 auto'}}>
                <p className="special" style={{color: '#EE4E31',}} data-sal="slide-up" data-sal-delay="250" data-sal-easing="ease-in-out">Hi, my name is</p>
                <h1 style={{fontStyle: 'italic', marginTop: 0}} data-sal="slide-up" data-sal-delay="500" data-sal-easing="ease-in-out">Elijah Kleinsmith</h1>
                {/* <hr style={{maxWidth: 475, margin: 0}}/> */}
                <p style={{maxWidth: 575, marginTop: '1.5vw', fontSize: 'calc(0.8rem + 0.7vw)', marginLeft: 2, marginBottom: 30}} data-sal="slide-up" data-sal-delay="750" data-sal-easing="ease-in-out">
                I'm a digital producer living and working in Kansas City, MO
                specializing in building and supporting exceptional,
                high-quality websites and immersive digital experiences.
                </p>
                <a href="mailto:hi@elijah.io">
                    <span data-sal="slide-up" data-sal-delay="1000" data-sal-easing="ease-in-out">
                    <button
                        className="special"
                        style={{
                            padding: '12px 30px',
                            fontSize: 14,
                            backgroundColor: 'transparent',
                            color: '#EE4E31',
                            borderColor: '#EE4E31',
                            textTransform: 'uppercase',
                            border: '1px solid',
                            transition: 'all 400ms'
                        }}
                    >
                        Get In Touch
                    </button>
                    </span>
                </a>
            </div>
        </div>
    </div>
  </footer>
)

export default IndexHero