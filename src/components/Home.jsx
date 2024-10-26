import React from "react";
import Hero from './Hero';
import Workflow from "./Workflow";
import Testimonials from "./Testanomials";
import Navbar from "./Navbar";
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
