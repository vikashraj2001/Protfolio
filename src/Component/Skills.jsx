import React, { useState } from 'react'
import { 
  SiReact, 
  SiJavascript, 
  SiTailwindcss, 
  SiGithub, 
  SiHtml5, 
  SiCss3,
  SiRedux,
  SiPostman,
  SiFigma,
  SiSpring,
  SiPostgresql
} from 'react-icons/si'
import { FaJava, FaCode, FaDatabase, FaChrome } from 'react-icons/fa'

export default function Skills() {
  const [showAll, setShowAll] = useState(false)

  const allSkills = [
    // Core Skills (Always Shown)
    { 
      name: 'React.js', 
      icon: SiReact,
      gradient: 'from-cyan-400 via-blue-500 to-cyan-600',
      particles: 6,
      glow: 'cyan',
      core: true
    },
    { 
      name: 'JavaScript', 
      icon: SiJavascript,
      gradient: 'from-yellow-400 via-orange-500 to-yellow-600',
      particles: 6,
      glow: 'yellow',
      core: true
    },
    { 
      name: 'Redux Toolkit', 
      icon: SiRedux,
      gradient: 'from-purple-400 via-purple-500 to-purple-600',
      particles: 6,
      glow: 'purple',
      core: true
    },
    { 
      name: 'Tailwind CSS', 
      icon: SiTailwindcss,
      gradient: 'from-cyan-400 via-teal-500 to-cyan-600',
      particles: 6,
      glow: 'teal',
      core: true
    },
    { 
      name: 'Java', 
      icon: FaJava,
      gradient: 'from-red-400 via-orange-500 to-red-600',
      particles: 6,
      glow: 'orange',
      core: true
    },
    { 
      name: 'Spring Boot', 
      icon: SiSpring,
      gradient: 'from-green-400 via-green-500 to-green-600',
      particles: 6,
      glow: 'green',
      core: true
    },
    { 
      name: 'PostgreSQL', 
      icon: SiPostgresql,
      gradient: 'from-blue-500 via-blue-600 to-indigo-600',
      particles: 6,
      glow: 'blue',
      core: true
    },
    { 
      name: 'Git & GitHub', 
      icon: SiGithub,
      gradient: 'from-gray-600 via-gray-800 to-black',
      particles: 6,
      glow: 'gray',
      core: true
    },
    // Additional Skills (Hidden by default)
    { 
      name: 'Context API', 
      icon: SiReact,
      gradient: 'from-blue-400 via-indigo-500 to-blue-600',
      particles: 6,
      glow: 'indigo',
      core: false
    },
    { 
      name: 'React Hooks', 
      icon: SiReact,
      gradient: 'from-cyan-500 via-blue-600 to-cyan-700',
      particles: 6,
      glow: 'cyan',
      core: false
    },
    { 
      name: 'HTML5', 
      icon: SiHtml5,
      gradient: 'from-orange-400 via-red-500 to-orange-600',
      particles: 6,
      glow: 'orange',
      core: false
    },
    { 
      name: 'CSS3', 
      icon: SiCss3,
      gradient: 'from-blue-400 via-blue-500 to-blue-600',
      particles: 6,
      glow: 'blue',
      core: false
    },
    { 
      name: 'PrimeReact', 
      icon: SiReact,
      gradient: 'from-purple-400 via-pink-500 to-purple-600',
      particles: 6,
      glow: 'pink',
      core: false
    },
    { 
      name: 'Fluent UI', 
      icon: SiReact,
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      particles: 6,
      glow: 'indigo',
      core: false
    },
    { 
      name: 'Spring MVC', 
      icon: SiSpring,
      gradient: 'from-green-500 via-emerald-500 to-green-600',
      particles: 6,
      glow: 'emerald',
      core: false
    },
    { 
      name: 'SQL', 
      icon: FaDatabase,
      gradient: 'from-indigo-400 via-blue-500 to-indigo-600',
      particles: 6,
      glow: 'indigo',
      core: false
    },
    { 
      name: 'Postman', 
      icon: SiPostman,
      gradient: 'from-orange-400 via-orange-500 to-orange-600',
      particles: 6,
      glow: 'orange',
      core: false
    },
    { 
      name: 'VS Code', 
      icon: FaCode,
      gradient: 'from-blue-400 via-blue-500 to-blue-600',
      particles: 6,
      glow: 'blue',
      core: false
    },
    { 
      name: 'Chrome DevTools', 
      icon: FaChrome,
      gradient: 'from-red-400 via-yellow-400 to-green-400',
      particles: 6,
      glow: 'yellow',
      core: false
    },
    { 
      name: 'Figma', 
      icon: SiFigma,
      gradient: 'from-pink-400 via-purple-500 to-pink-600',
      particles: 6,
      glow: 'pink',
      core: false
    }
  ]

  const displayedSkills = showAll ? allSkills : allSkills.filter(skill => skill.core)

  const SkillCard = ({ skill, index }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 })
    const Icon = skill.icon

    const handleMouseMove = (e) => {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = (y - centerY) / 10
      const rotateY = (centerX - x) / 10

      setTilt({ x: rotateX, y: rotateY })
    }

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 })
    }

    return (
      <div
        className="group relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          animation: 'slideIn 0.8s ease-out forwards',
          animationDelay: `${index * 0.03}s`,
          opacity: 0
        }}
      >
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(skill.particles)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-${skill.glow}-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle-float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        {/* Glassmorphism Card */}
        <div
          className="relative h-32 rounded-2xl overflow-hidden transition-all duration-500"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.x || tilt.y ? 1.05 : 1})`,
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Background Gradient Blur */}
          <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}></div>

          {/* Glass Effect */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl shadow-xl">
            {/* Inner Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-center p-4 z-10">
              {/* Animated Icon Container */}
              <div className="relative mb-2">
                {/* Icon Glow Ring */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-60 group-hover:scale-150 transition-all duration-700`}></div>
                
                {/* Icon Background */}
                <div className={`relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${skill.gradient} shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  <Icon className="text-2xl text-white relative z-10" />
                  
                  {/* Rotating Border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-white/50 group-hover:animate-spin" style={{animationDuration: '3s'}}></div>
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-sm font-bold text-slate-800 text-center group-hover:scale-105 transition-transform duration-300 leading-tight">
                {skill.name}
              </h3>

              {/* Animated Progress Bar */}
              <div className="w-full max-w-[80px] h-1.5 bg-white/50 rounded-full overflow-hidden mt-2">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out`}
                ></div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            </div>
          </div>

          {/* Corner Accents */}
          <div className={`absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 group-hover:animate-ping`}></div>
          <div className={`absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 group-hover:animate-ping`} style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-16 relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50"></div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
          <p className="text-slate-600 text-base mt-6 max-w-2xl mx-auto">
            Hover over each card to see the magic ✨
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
          {displayedSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full font-bold text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">
              {showAll ? 'Show Less' : `Show All Skills (${allSkills.length - displayedSkills.length} more)`}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-purple-100 shadow-lg">
              <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <SiReact className="text-white text-xl" />
                </span>
                Frontend
              </h3>
              <p className="text-sm text-slate-600">React.js, Redux, Hooks, Tailwind CSS, PrimeReact, Fluent UI</p>
            </div>

            {/* Backend */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-purple-100 shadow-lg">
              <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <SiSpring className="text-white text-xl" />
                </span>
                Backend
              </h3>
              <p className="text-sm text-slate-600">Java, Spring Boot, Spring MVC, SQL, PostgreSQL</p>
            </div>

            {/* Tools */}
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-purple-100 shadow-lg">
              <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                <span className="w-8 h-8 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                  <SiGithub className="text-white text-xl" />
                </span>
                Tools
              </h3>
              <p className="text-sm text-slate-600">Git, Postman, VS Code, Chrome DevTools, Figma</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes particle-float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  )
}