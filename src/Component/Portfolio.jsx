// Portfolio.jsx - Complete with 4 Projects
import React, { useState, useEffect } from 'react'

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  const projects = [
    {
      title: 'SinglePoint (Broker/Market)',
      duration: 'May 2025 - Present',
      description: 'Comprehensive aviation industry software platform with fast booking system, role-based access, and inventory management for vehicle availability and maintenance schedules.',
      link: 'https://singlepoint.instacharter.app/',
      tags: ['React.js', 'Tailwind CSS', 'PrimeReact', 'Context API', 'REST API', 'jsPDF', 'Dynamic PDF'],
      features: [
        'CRM Dashboard & Todo/Task System',
        'Booking Management & Workflows',
        'Inventory Management Panel',
        'Role-based UI Access & Protected Routes'
      ],
      gradient: 'from-blue-400 via-cyan-400 to-teal-400',
      extendedFeatures: [
        'Real-time booking updates and notifications',
        'Advanced search and filter capabilities',
        'Multi-role permission system (Admin, Manager, Agent)',
        'Automated email notifications',
        'Dashboard analytics and reporting',
        'Mobile-responsive design'
      ],
      technicalHighlights: [
        'State management with Context API',
        'Dynamic PDF generation using jsPDF',
        'RESTful API integration',
        'Protected routes with role-based access',
        'Performance optimization with lazy loading',
        'Component reusability and modularity'
      ]
    },
    {
      title: 'SinglePoint Support',
      duration: 'May 2025 - Present',
      description: 'Customer support and ticketing system for aviation industry with real-time chat, ticket management, and analytics dashboard.',
      link: 'https://support.instacharter.app/',
      tags: ['React.js', 'Tailwind CSS', 'Socket.io', 'Context API', 'REST API', 'Real-time'],
      features: [
        'Real-time Chat Support System',
        'Ticket Management & Tracking',
        'Multi-channel Support Integration',
        'Analytics & Reporting Dashboard'
      ],
      gradient: 'from-emerald-400 via-green-400 to-teal-400',
      extendedFeatures: [
        'Live chat with customers',
        'Ticket priority and status management',
        'Email notification system',
        'Customer satisfaction surveys',
        'Support agent performance metrics',
        'Knowledge base integration'
      ],
      technicalHighlights: [
        'Real-time communication with Socket.io',
        'State management with Context API',
        'RESTful API integration',
        'Responsive design for all devices',
        'File attachment support',
        'Search and filter capabilities'
      ]
    },
    {
      title: 'Velocitai Landing Page',
      duration: '2024',
      description: 'Responsive company website with focus on component reusability, API integration, and enhanced user experience. Optimized for performance and SEO.',
      link: 'https://velocitai.com',
      tags: ['React.js', 'CSS3', 'JavaScript', 'REST API', 'SEO'],
      features: [
        'Component Reusability',
        'RESTful API Integration',
        'Performance Optimization',
        'Enhanced Load Speed'
      ],
      gradient: 'from-purple-400 via-pink-400 to-rose-400',
      extendedFeatures: [
        'Fully responsive across all devices',
        'SEO optimized with meta tags',
        'Fast page load times (<2s)',
        'Smooth scroll animations',
        'Contact form with validation',
        'Blog integration with CMS'
      ],
      technicalHighlights: [
        'Component-based architecture',
        'Code splitting for better performance',
        'Image optimization and lazy loading',
        'Cross-browser compatibility',
        'Accessibility standards (WCAG 2.1)',
        'Google Analytics integration'
      ]
    },
    {
      title: 'Personal Portfolio Website',
      duration: '2024',
      description: 'Modern, responsive portfolio website showcasing projects, skills, and professional experience with interactive UI components and smooth animations.',
      link: 'https://your-portfolio-link.com',
      tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'Responsive Design'],
      features: [
        'Interactive Hero Section',
        'Animated Skills Display',
        'Project Showcase with Modals',
        'Contact Form Integration'
      ],
      gradient: 'from-indigo-400 via-purple-400 to-pink-400',
      extendedFeatures: [
        'Smooth scroll navigation',
        'Dark/Light mode toggle',
        'Glassmorphism design effects',
        'Mobile-first responsive design',
        'Form validation and submission',
        'Social media integration'
      ],
      technicalHighlights: [
        'Modern React with Hooks',
        'Tailwind CSS for styling',
        'Framer Motion for animations',
        'Component-based architecture',
        'Performance optimized',
        'SEO friendly structure'
      ]
    }
  ]

  return (
    <div className="py-4">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-left">
  <span className="text-slate-800">My </span>
  <span className="text-pink-500">Projects</span>
</h2>

<p className="text-slate-600 text-left mb-4 max-w-2xl">
  Real-world applications built with modern technologies and best practices
</p>


      {/* Projects Grid - Compact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-pink-300 hover:-translate-y-1"
          >
            {/* Project Header - Smaller */}
            <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
              
              {/* Project Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-700">
                {project.duration}
              </div>
            </div>

            {/* Project Info - Compact */}
            <div className="p-4">
              {/* Title */}
              <h3 className="text-base font-bold text-slate-800 mb-2 group-hover:text-pink-500 transition-colors line-clamp-2">
                {project.title}
              </h3>

              {/* Project Link - Below Title */}
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-600 hover:text-cyan-700 mb-3 inline-flex items-center gap-1 font-medium break-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="line-clamp-1">{project.link.replace('https://', '').replace('http://', '')}</span>
                </a>
              )}

              {/* Description */}
              <p className="text-slate-600 mb-3 text-xs leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Show only 3 tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-0.5 text-xs font-medium text-slate-500">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {/* See More Button */}
              <button 
                onClick={() => setSelectedProject(index)}
                className="w-full px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>See More Details</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedProject !== null && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative animate-modalSlideIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Gradient */}
            <div className={`h-40 bg-gradient-to-br ${projects[selectedProject].gradient} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
              >
                <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Duration Badge */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-700">
                {projects[selectedProject].duration}
              </div>

              {/* Project Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
                {projects[selectedProject].title}
              </h2>

              {/* Link - Below Title */}
              {projects[selectedProject].link && (
                <a 
                  href={projects[selectedProject].link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-cyan-600 hover:text-cyan-700 mb-4 inline-flex items-center gap-2 font-medium bg-cyan-50 px-3 py-2 rounded-lg hover:bg-cyan-100 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span className="break-all">{projects[selectedProject].link}</span>
                </a>
              )}

              {/* Description */}
              <p className="text-slate-600 mb-6 leading-relaxed mt-4">
                {projects[selectedProject].description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Technologies:</h3>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Key Features:</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Features */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Additional Features:</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].extendedFeatures.map((feature, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Highlights */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Technical Highlights:</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].technicalHighlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start">
                      <svg className="w-5 h-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {/* Visit Project Button */}
                {projects[selectedProject].link && (
                  <a
                    href={projects[selectedProject].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span>Visit Project</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>Close</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-modalSlideIn {
          animation: modalSlideIn 0.3s ease-out;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}