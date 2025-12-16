import React from 'react'

import Hero from './Component/Hero';
import About from './Component/About';
import Skills from './Component/Skills';
import Portfolio from './Component/Portfolio';
import Contact from './Component/Contact';

import ExperienceEducation from './Component/ExperienceEducation'


export default function App() {


  
  return (
    
     
<div className="relative">
  {/* Hero Section */}
  <section id="home" className="relative">
    <Hero />

    {/* Wave Mask */}
    <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
      <svg
        className="w-full h-32"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C240,90 480,100 720,90 C960,80 1200,70 1440,90 L1440,120 L0,120 Z"
          fill="white"
        />
      </svg>
    </div>
  </section>

  {/* Main Content */}
  <div className="bg-white">
    <section id="about" className="pt-3 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <About />
      </div>
    </section>

    <section id="skills" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Skills />
      </div>
    </section>

    <section id="portfolio" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Portfolio />
      </div>
    </section>

       <section id="experience" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ExperienceEducation />
      </div>
    </section>

    <section
      id="contact"
      className="bg-gradient-to-br from-[#0B1437] via-[#1a1d4e] to-[#3d1e52] py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <Contact />
      </div>
    </section>
  </div>
</div>



  );
}
