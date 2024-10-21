import React from 'react'
import Logo from '../assets/images/logo1.png'
const navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-box'>
           <div className='navbar-logo-section'>
            <a href=''>TrueMix</a>
            <img src={Logo} alt='No Image Found'></img>
           </div>
           <div className='navbar-links'>
           <li><a href=''>How it Works</a></li>
           <li><a href=''>Testanomials</a></li>
           <li><a href=''>TruthMate</a></li>
           <li><a href=''>Read News</a></li>
           </div>
           <div className='navbar-auths'>
           <button className='btn-1'>Login</button>
           <button className='btn-2'>Start Free Trial</button>
    
           </div>
      </div>
    </div>
  )
}

export default navbar