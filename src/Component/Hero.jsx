import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ArrowRight, Download } from 'lucide-react';
import profiles from "../assets/Profile.png"
export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    'React Developer',
    'Frontend Engineer',
    'JavaScript Expert'
  ];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const experienceText = "Experience & Education";

  return (
    <section className="relative w-full min-h-screen flex items-center justify-between overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1437] via-[#1a1d4e] to-[#3d1e52]">
        {/* Corner accent lights */}
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
          <a href="#experience" className="hover:text-pink-500 transition-colors">{experienceText.toUpperCase()}</a>
          <a href="#contact" className="hover:text-pink-500 transition-colors">CONTACT</a>
           <a 
              href={`${import.meta.env.BASE_URL}Vikash Singh Frontend Developer.pdf`}
              // download
              target="_blank"
              className="group flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300"
            >
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              <span>DOWNLOAD CV</span>
            </a>
        </div>
      </nav>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between py-20">
        
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <p className="text-white/80 text-sm md:text-base tracking-wider mb-4 uppercase flex items-center space-x-2">
            <span className="w-12 h-px bg-pink-500"></span>
            <span>Hello there, welcome to my site</span>
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-2">
            <span className="text-white">I'm </span>
            <span className="text-white">Vikash Singh</span>
          </h1>
          
          {/* Animated Typing Effect */}
          <div className="h-20 md:h-24 mb-8 ">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-pink-500">A {text}</span>
              <span className="text-pink-500 animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Passionate about crafting beautiful, responsive web applications. 
            I transform ideas into elegant code and create seamless user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a 
              href="#portfolio"
              className="group flex items-center space-x-2 px-6 py-3 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-all duration-300 shadow-lg shadow-pink-500/50"
            >
              <span>SEE PORTFOLIO</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact"
              className="group flex items-center space-x-2 px-6 py-3 border-2 border-white/30 text-white rounded-full font-medium hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
            >
              <span>CONTACT ME</span>
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>

           
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-2">
            
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vikashsinghraj2001@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-pink-500 hover:scale-110 transition-all duration-300 group"
            >
              <Mail className="text-white group-hover:rotate-12 transition-transform" size={20} />
            </a>
            <a 
              href="https://github.com/vikashraj2001" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-pink-500 hover:scale-110 transition-all duration-300 group"
            >
              <Github className="text-white group-hover:rotate-12 transition-transform" size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vikashraj/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-pink-500 hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="text-white group-hover:rotate-12 transition-transform" size={20} />
            </a>
          </div>

         
        </div>

        {/* Right Image with Gradient Border */}
     {/* Right Image with Gradient Border */}
<div className="hidden lg:flex flex-1 justify-center items-center pl-12">
  <div className="relative group">
    {/* Animated gradient glow effect */}
    <div className="absolute -inset-1 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 rounded-[2.5rem] blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    {/* Gradient border container */}
    <div className="relative bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-400 rounded-[2.5rem] p-1 group-hover:scale-105 transition-transform duration-300">
      {/* Inner container */}
      <div className="relative bg-gradient-to-br from-[#1a1a3e] to-[#0a1128] rounded-[2.4rem] overflow-hidden">
        <div className="w-[380px] h-[480px] rounded-[2.3rem] overflow-hidden">
          <img 
            src={profiles}
          
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* Floating badges */}
    <div className="absolute -top-4 -right-4 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
      Available for Hire
    </div>
    <div className="absolute -bottom-4 -left-4 bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
      React Expert
    </div>
  </div>
</div>

      </div>


      {/* Animated gradient orbs in background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
}