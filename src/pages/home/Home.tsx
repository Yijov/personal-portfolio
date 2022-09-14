import React from 'react'
import About from '../about/About'
import Contact from '../contact/Contact'
import Knowledge from '../knowledge/Knowledge'
import Projects from '../projects/Projects'

 const Home = () => {
  return (
    <>
      <About hasHeading={false}/>
      <Projects hasHeading={true}/>
      <Knowledge hasHeading={true}/>
      <Contact hasHeading={true}/>
      
    </>
  )
}


export default Home