import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ProjectBackground from './components/ProjectBackground';
import WordZoom from './components/WordZoom';

function App() {
  const projects = [
    {
      title: "Traffic Prediction System",
      category: "Machine Learning / Python",
      image: "https://media.giphy.com/media/xT9C25UNTwfZuk85WP/giphy.gif",
      description: "An end-to-end machine learning platform that predicts hourly traffic volumes with high accuracy. Built using Python and Scikit-learn, it features a Random Forest model trained on environmental data. The system includes an interactive Streamlit dashboard with SHAP explainability plots and Folium maps for real-time hotspot visualization.",
      githubLink: "https://upombiprocodes-traffic-prediction-syst-explain-dashboard-yoxxol.streamlit.app/"
    },
    {
      title: "Impact Dashboard",
      category: "Sustainability / Data Analysis",
      image: "https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif",
      description: "A comprehensive dashboard designed to minimize carbon footprints and analyze environmental impact. This tool aggregates data to visualize CO2 emissions, offering actionable insights for reduction. It features dynamic charts and goal-tracking modules to encourage sustainable practices.",
      githubLink: "https://github.com/upombiprocodes"
    },
    {
      title: "Applicant Management System",
      category: "Java / SQL / Figma",
      image: "https://media.giphy.com/media/l0HlBO7eyXzSZkJri/giphy.gif",
      description: "A robust desktop application engineered to automate 90% of university admissions processes. It features a secure SQL database managing over 1,000 applicant records and a custom Java Swing interface designed from high-fidelity Figma prototypes.",
      githubLink: "https://github.com/upombiprocodes/Applicant-Management-System-UNIVERSITY"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white cursor-none selection:bg-red-500 selection:text-white overflow-x-hidden">
      <CustomCursor />
      <WordZoom />
      <Navbar />

      <main>
        <Hero />

        {/* Work Section */}
        <section id="work" className="bg-black relative z-10 overflow-hidden">
          <ProjectBackground />
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter">
                <span className="text-white">SELECTED</span> <br /> <span className="text-zinc-800">WORK</span>
              </h2>
              <p className="text-gray-400 max-w-sm text-right leading-relaxed">
                A showcase of technical projects demonstrating full-stack development and machine learning expertise.
              </p>
            </div>
          </div>

          <div className="relative z-10">
            {projects.map((project, index) => (
              <ProjectSection key={index} {...project} index={index} />
            ))}
          </div>
        </section>

        {/* About / Skills Section */}
        <section id="about" className="py-20 bg-zinc-900 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">About Me</h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I'm <span className="text-white font-bold">Upom Bipro</span>, a Computer Science undergraduate at Brunel University London.
                  </p>
                  <p>
                    I combine technical expertise in <span className="text-red-500">Python, Java, and SQL</span> with a passion for building intuitive user experiences. My work spans from training machine learning models to designing secure database schemas and interactive UIs.
                  </p>
                  <p>
                    Currently seeking a software engineering internship to apply my skills in solving real-world problems.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-red-500 font-bold mb-6 uppercase tracking-widest text-sm">Development</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="border-b border-gray-800 pb-2">Python (Scikit-learn, Pandas)</li>
                    <li className="border-b border-gray-800 pb-2">Java (Swing, OOP)</li>
                    <li className="border-b border-gray-800 pb-2">SQL & SQLite</li>
                    <li className="border-b border-gray-800 pb-2">React, Tailwind, Framer Motion</li>
                    <li className="border-b border-gray-800 pb-2">Streamlit & Folium</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-red-500 font-bold mb-6 uppercase tracking-widest text-sm">Tools & Design</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="border-b border-gray-800 pb-2">Figma (Prototyping)</li>
                    <li className="border-b border-gray-800 pb-2">Git & GitHub</li>
                    <li className="border-b border-gray-800 pb-2">VS Code & IntelliJ</li>
                    <li className="border-b border-gray-800 pb-2">Agile Methodology</li>
                    <li className="border-b border-gray-800 pb-2">UI/UX Principles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
