import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Motivation" />
    <br /> 
    <p>"Your beginnings will seem humble, so prosperous will your future be."</p>
    <br />
    <Link to="/">👈 Go back to home</Link>
  </Layout>
)

export default About
