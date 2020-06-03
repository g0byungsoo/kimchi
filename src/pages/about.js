import React from "react"
import { Link } from "gatsby"

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
    <Link to="/">👈 Go back to home</Link>
  </Layout>
)

export default About
