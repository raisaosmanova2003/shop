import React from 'react'
import Season from './Season/Season'
import Women from './Women/Women';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
    <Helmet>
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Season/>
      <Women/>
     
    </>
  )
}

export default Home
