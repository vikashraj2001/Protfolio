import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import profileImg from '../assets/Profile.jpg'

export default function Hero() {
    const text="Experience & Education";
  return (
    <section className="relative w-full min-h-screen flex items-center justify-between overflow-hidden">
      {/* Animated background gradient - matching the deep blue to purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1437] via-[#1a1d4e] to-[#3d1e52]">
        {/* Corner accent lights - cyan glow */}
        <div className="absolute top-6 left-6 w-3 h-3 bg-cyan-300 rounded-full shadow-[0_0_20px_rgba(103,232,249,0.8)]"></div>
        <div className="absolute top-6 right-6 w-3 h-3 bg-cyan-300 rounded-full shadow-[0_0_20px_rgba(103,232,249,0.8)]"></div>
        <div className="absolute bottom-6 left-6 w-3 h-3 bg-cyan-300 rounded-full shadow-[0_0_20px_rgba(103,232,249,0.8)]"></div>
        <div className="absolute bottom-6 right-6 w-3 h-3 bg-cyan-300 rounded-full shadow-[0_0_20px_rgba(103,232,249,0.8)]"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-8 md:px-16 py-6 z-20">
        <div className="flex items-center space-x-2">
          <span className="text-white text-2xl font-bold">Vikash</span>
          <span className="text-pink-500 text-2xl font-bold">Singh</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-white text-sm font-medium">
          <a href="#home" className="hover:text-pink-500 transition-colors">HOME</a>
          <a href="#about" className="hover:text-pink-500 transition-colors">ABOUT</a>
          <a href="#skills" className="hover:text-pink-500 transition-colors">SKILLS</a>
          <a href="#portfolio" className="hover:text-pink-500 transition-colors">PORTFOLIO</a>
          <a href="#experience" className="hover:text-pink-500 transition-colors">{text.toUpperCase()}</a>
          <a href="#contact" className="hover:text-pink-500 transition-colors">CONTACT</a>
          <button className="px-6 py-2 border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300">
            HIRE ME
          </button>
        </div>
      </nav>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between py-20">
        
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <p className="text-white/80 text-sm md:text-base tracking-wider mb-4 uppercase">
            Hello there, welcome to my site
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
            <span className="text-white">I'm </span>
            <span className="text-white">Vikash Singh</span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
            <span className="text-pink-500">A React Developer</span>
          </h2>
          
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            & UI/UX Designer
          </h3>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4 mb-8">
            <button className="flex items-center space-x-2 px-6 py-3 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/50">
              <span>SEE PORTFOLIO</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            
            <button className="flex items-center space-x-2 px-6 py-3 border-2 border-white/30 text-white rounded-full font-medium hover:border-pink-500 hover:text-pink-500 transition-all duration-300">
              <span>CONTACT ME</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          {/* Social Icons - moved below buttons */}
          <div className="flex space-x-4">
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vikashsinghraj2001@gmail.com" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-pink-500 hover:scale-110 transition-all duration-300"
            >
              <FaEnvelope className="text-white" size={20} />
            </a>
            <a 
              href="https://github.com/vikashraj2001" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-pink-500 hover:scale-110 transition-all duration-300"
            >
              <FaGithub className="text-white" size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vikashraj/" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-pink-500 hover:scale-110 transition-all duration-300"
            >
              <FaLinkedin className="text-white" size={20} />
            </a>
          </div>
        </div>

        {/* Right Image with Gradient Border */}
        <div className="hidden lg:flex flex-1 justify-center items-center pl-12">
          <div className="relative">
            {/* Gradient glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 rounded-[2.5rem] blur-lg opacity-75"></div>
            
            {/* Gradient border container */}
            <div className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 rounded-[2.5rem] p-1">
              {/* Inner container */}
              <div className="relative bg-gradient-to-br from-[#1a1a3e] to-[#0a1128] rounded-[2.4rem] overflow-hidden">
                <img
                  src={profileImg}
                  alt="Tomasz Gajda"
                  className="object-cover w-[380px] h-[480px] rounded-[2.3rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated gradient orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
    </section>
  )
}
