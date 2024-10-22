import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Workflow from './components/workflow'
import Testanomials from './components/Testanomials'
const App = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Workflow/>
       <Testanomials/>
    </div>
  )
}

export default App