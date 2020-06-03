import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Typist from 'react-typist';

const IndexPage = () => (

  <Layout>
	<Typist>
      	Welcome to Kimchi Blog. 🙇🏻‍♀️🙇🏻	
      	<Typist.Delay ms={500} />
    	<br />
    	<br />
    	Here... 
    	<Typist.Delay ms={1000} />
    	{' '}
    	I'm writing about my life.
    	<Typist.Backspace count={5} delay={500} />
    	mood.
    	<Typist.Backspace count={5} delay={500} />
    	thoughts.
    	<Typist.Delay ms={200} />
    	<Typist.Backspace count={12} delay={500} />
    	what I love 💕
    	<Typist.Delay ms={200} />
    	<Typist.Backspace count={14} delay={400} />
    	how to make Kimchi!
    	<Typist.Delay ms={200} />
    	<br />
    	<br />
    	🥬🌶️🧄
    	<Typist.Delay ms={500} />
	  <br />
	  <br />
	  Kimchi is delicious.
	  <Typist.Backspace count={10} delay={400} />
	  healthy
	  <Typist.Delay ms={300} />
	  ,{' '}as it boosts your immunity. 💪🦠
	  <Typist.Backspace count={41} delay={800} /> 
	  awesome! 😝
	  <br />
	  <br />
	  <Typist.Delay ms={400} />
	  Click
	  {' '}
	  <AniLink paintDrip color="green" to="about">
	    here
	  </AniLink>
	  {' '}
	  to read my story.
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>

	</Typist>    



  </Layout>
)

export default IndexPage
