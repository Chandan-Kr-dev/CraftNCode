import React from "react";
import Hero from '../components/hero'
import Workflow from './workflow'
import Testimonials from '../components/Testanomials'
import Navbar from  './navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <Workflow />
      <Testimonials />
      <Footer/>
    </>
  );
};

export default Home;
