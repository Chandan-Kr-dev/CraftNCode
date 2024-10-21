import React from 'react'
import HeroImage from '../assets/images/hero.jpg'

const hero = () => {
  return (
    <div className='hero'>
      <div className='announcement-box'>
        <p>🚀 New Feature : Verify Facts in Code-mixed Language 🔥</p>
      </div>
      <div className='hero-heading '>
        <h1 className='text-5xl  lg:text-8xl my-4 mt-12 py-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent'>Ensuring Truth<br></br>in a Multilingual World</h1>
        <p className=' p-5'>Verify <span>Information Seamlessly</span> across Multiple Languages including Code-mixed sentences like  <span>Hindi-English</span> 
          <br></br>Ensure that Facts remain <span>Accurate and Trustworthy</span> no matter the Language or Location
        </p>
      </div>
      <div className='hero-buttons'>
        <button className='btn-1-hero'>Start Free Trial</button>
        <button className='btn-2-hero'>Try TruthMate</button>
      </div>
      <div className='hero-image mt-20 mb-24'>
        <img src={HeroImage} alt='No Image Found'></img>
      </div>
    </div>
  )
}

export default hero