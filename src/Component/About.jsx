import React from 'react'

export default function About() {
  return (
    <div className="py-8">
      {/* Section Title */}
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        <span className="text-slate-800">About </span>
        <span className="text-pink-500">Me</span>
      </h2>

      {/* Content Card */}
      <div className="bg-white rounded-2xl shadow-lg shadow-purple-100 p-8 md:p-12 border border-purple-100 hover:shadow-xl hover:shadow-purple-200 transition-all duration-300">
        <p className="text-slate-700 text-lg leading-relaxed">
          React Frontend Engineer with experience building scalable web applications using React.js, JavaScript (ES6+),
          HTML, CSS, and Fluent UI. Skilled in React Hooks, reusable component development, state management with
          Redux and MobX, and RESTful API integration. Experienced in converting UI/UX designs into high-quality code,
          optimizing performance, and collaborating with backend and UX teams in Agile environments.
        </p>

        {/* Optional: Add some accent decorations */}
        <div className="mt-6 flex items-center space-x-2">
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"></div>
          <div className="h-1 w-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
