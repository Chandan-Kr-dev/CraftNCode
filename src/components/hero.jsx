import React from 'react';
import HeroImage from '../assets/images/hero.jpg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='hero'>
      <motion.div 
        className='announcement-box'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8}}
      >
        <p>🚀 New Feature : Verify Facts in Code-mixed Language 🔥</p>
      </motion.div>
      
      <motion.div 
        className='hero-heading'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className='text-5xl lg:text-8xl my-4 mt-12 py-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent'>
          Ensuring Truth<br />in a Multilingual World
        </h1>
        <p className='p-5'>
          Verify <span>Information Seamlessly</span> across Multiple Languages including Code-mixed sentences like <span>Hindi-English</span>
          <br />
          Ensure that Facts remain <span>Accurate and Trustworthy</span> no matter the Language or Location
        </p>
      </motion.div>
      
      <motion.div 
        className='hero-buttons'
        initial={{ opacity: 0 , scale: 0.8}}
        animate={{ opacity: 1 , scale: 1 }}
        transition={{ duration: 1}}
      >
        <motion.button 
          className='btn-1-hero'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Start Free Trial
        </motion.button>
        <motion.button 
          className='btn-2-hero'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Play Games
        </motion.button>
      </motion.div>
      
      <motion.div 
        className='hero-image mt-20 mb-24'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={HeroImage} alt='No Image Found' />
      </motion.div>
    </div>
  );
}

export default Hero;
