import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award, ChevronDown, ChevronUp } from 'lucide-react';

export default function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState('experience');
  const [expandedItems, setExpandedItems] = useState({});

  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Dream Flights Pvt Ltd',
      location: ' Jhunsi Prayag Raj (211019)',
      period: 'May 2025 - Present',
      description: 'Built responsive web interfaces using React.js, Tailwind CSS, and PrimeReact, managed dynamic state with Context API and React Hooks, generated PDFs using jsPDF, and improved performance with lazy loading and code-splitting.',
      achievements: [
        'Developed responsive and user-friendly web interfaces using React.js, Tailwind CSS, and PrimeReact',
        'Implemented state management using Context API and React Hooks for dynamic UI , efficient data handling',
        'Generated dynamic PDFs for Itinerary, invoices, and reports using jsPDF',
        'Optimized UI performance with lazy loading, memoization, and code-splitting'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'React Developer',
      company: 'Velocitai Digital Pvt Ltd.',
      location: 'Tower-C, Unitech Cyber Park, Sector 39, Gurugram, Haryana 122001',
      period: 'May 2024 - Apr 2025',
      description: 'Built dynamic and responsive user interfaces using React.js, JavaScript, and CSS from May 2024 to April 2025, developed reusable components with lazy loading and controlled/uncontrolled forms, integrated REST APIs for contract and blog management, and followed best practices for component-based architecture, responsive design, and web accessibility using semantic HTML and ARIA labels.',
      achievements: [
        'Built dynamic and responsive UI using React.js, JavaScript, and CSS',
        'Developed reusable components, implemented lazy loading & controlled/uncontrolled forms',
        ' Integrated REST APIs for contracts and blog management',
        'Component-based UI, Responsive Design, Web Accessibility (ARIA labels, semantic HTML, keyboard navigation)'
      ],
      color: 'from-purple-500 to-pink-500'
    },
   
  ];

  const education = [
    {
      id: 1,
      degree: 'Master of Computer Applications.(MCA)',
      school: 'Chandigarh University',
      location: 'NH-05 Chandigarh-Ludhiana Highway',
      period: '2022 - 2024',
      description: 'Specialized in Cc & Devops',
      achievements: [
        'CGPA: 7.00 / 10.0',
        'Published 2 research papers on neural networks',
      
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Applications. (BCA)',
      school: 'Integral University',
      location: 'Lucknow Kursi Rd, Dashauli, Uttar Pradesh 226026',
      period: '2019 - 2022',
      description: 'Comprehensive foundation in software development and engineering principles.',
      achievements: [
        'CGPA: 8.4 / 10.0',
     
      ],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const TimelineItem = ({ item, index, isEducation }) => {
    const isExpanded = expandedItems[item.id];
    const Icon = isEducation ? GraduationCap : Briefcase;

    return (
      <div className="relative pl-8 pb-12 group">
        {/* Vertical Line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200"></div>
        
        {/* Timeline Dot */}
        <div className={`absolute left-0 top-2 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} -ml-[7px] ring-4 ring-white shadow-lg transition-transform group-hover:scale-125`}></div>

        {/* Content Card */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200">
          {/* Gradient Header */}
          <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
          
          <div className="p-6">
            {/* Title Section */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {isEducation ? item.degree : item.title}
                </h3>
                <p className="text-lg text-gray-600 font-medium">
                  {isEducation ? item.school : item.company}
                </p>
              </div>
              <Icon className={`w-8 h-8 text-gray-400 ml-4 flex-shrink-0`} />
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{item.period}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{item.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-4">{item.description}</p>

            {/* Expandable Achievements */}
            <div>
              <button
                onClick={() => toggleExpand(item.id)}
                className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors mb-2"
              >
                <Award className="w-4 h-4" />
                <span>Key Achievements</span>
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              <div className={`transition-all duration-300 overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="space-y-2 mt-3">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${item.color} flex-shrink-0`}></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Professional Journey
          </h1>
          <p className="text-gray-600 text-lg">
            Explore my experience and educational background
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-8 bg-white rounded-xl p-2 shadow-md">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            <span>Experience</span>
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            <span>Education</span>
          </button>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {activeTab === 'experience' ? (
            <div>
              {experiences.map((exp, index) => (
                <TimelineItem key={exp.id} item={exp} index={index} isEducation={false} />
              ))}
            </div>
          ) : (
            <div>
              {education.map((edu, index) => (
                <TimelineItem key={edu.id} item={edu} index={index} isEducation={true} />
              ))}
            </div>
          )}
        </div>

        {/* Footer Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-500 mb-1">2+</div>
            <div className="text-sm text-gray-600">Years Experience</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-500 mb-1">4+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-green-500 mb-1">2</div>
            <div className="text-sm text-gray-600">Degrees Earned</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-orange-500 mb-1">5</div>
            <div className="text-sm text-gray-600">Team Members Led</div>
          </div>
        </div>
      </div>
    </div>
  );
}