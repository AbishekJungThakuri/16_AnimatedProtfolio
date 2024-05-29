import React from 'react'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Parallax } from './Components/Parallax'
import { Services } from './Components/Services'
import { Portfolio } from './Components/Portfolio'

 const App = () => {
  return (
    <>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section  id='Services'>
      <Parallax type='services' />
    </section>
    <section >
      <Services/>
    </section>
    <section  id='Portfolio'>
      <Parallax type='portfolio' />
    </section>
    
    <Portfolio/>
    
    </>
  )
}

export default App