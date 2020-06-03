import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const About = () => (
  <Layout>
    <SEO title="Motivation" />
    <br /> 
    <p>"Your beginnings will seem humble, so prosperous will your future be."</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <AniLink fade to="/">👈 Go back to home</AniLink>
  </Layout>
)

export default About
