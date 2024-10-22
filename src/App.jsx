import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Workflow from './components/workflow'
import Testanomials from './components/Testanomials'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Workflow/>
       <Testanomials/>
       <Footer/>
    </div>
  )
}

export default App