import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import WordZoom from './components/WordZoom';
import profileImage from './assets/profile.jpg';

import ExperienceTimeline from './components/ExperienceTimeline';

function App() {
  const projects = [
    {
      title: "Explainable Burnout Prediction",
      category: "Machine Learning / Fairness AI",
      image: "https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif",
      description: "A production-grade ML system that predicts employee burnout risk with SHAP explanations and fairness auditing. Features a FastAPI REST API, Streamlit dashboard with intervention simulator, demographic parity analysis, and 39 automated tests. Built with scikit-learn, MLflow tracking, and comprehensive bias detection.",
      githubLink: "https://github.com/usbsucksatcoding/explainable-workforce-burnout-system"
    },
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
        <section id="work" className="bg-black relative z-10">
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
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col gap-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">About Me</h2>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative inline-block group self-start"
                >
                  <div className="absolute -inset-2 bg-red-500/20 rounded-[2rem] blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <motion.img
                    src={profileImage}
                    alt="Upom Bipro"
                    whileHover={{ scale: 1.05, borderColor: "rgba(239, 68, 68, 0.5)" }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-3xl object-cover border-4 border-red-500/20 shadow-2xl cursor-pointer"
                  />
                </motion.div>

                <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-justify">
                  <blockquote className="border-l-4 border-red-500 pl-4 italic text-xl text-white mb-8">
                    "A developer with an analyst’s brain — and a teacher’s heart."
                  </blockquote>

                  <p>
                    I’m <span className="text-white font-bold">Upom Bipro</span>, a Computer Science student at Brunel University London who loves turning messy problems into simple, usable solutions. My path hasn’t been traditional — and that has shaped the way I work.
                  </p>
                  <p>
                    I grew up in Bangladesh, where technology always felt like the gateway to creating something bigger than myself. Moving to the UK sharpened that ambition, pushing me to adapt quickly, communicate across cultures, and learn how different environments influence the way people interact with tech.
                  </p>
                  <p>
                    Outside university, I work as a Teaching Assistant in Special Educational Needs schools. That role has taught me something that textbooks can’t: patience, empathy, and the skill to break down complex ideas into clear, helpful guidance. I’ve learned how different users think — a mindset I now apply when designing software and improving user experience.
                  </p>
                  <p>
                    To support myself, I also worked at Marks & Spencer. Retail is the frontline of customer experience, and dealing with fast-paced environments trained me to stay calm under pressure, solve operational issues on the spot, and deliver reliability day after day. It’s where I understood that every interaction — digital or physical — has to feel smooth and human-centric.
                  </p>
                  <p>
                    My earlier internships in Bangladesh helped me build a strong technical foundation. As a Junior Frontend Web Developer, I contributed to real client projects where UI decisions directly shaped engagement. Later, as an AI Engineer intern, I explored data, machine learning, automation, and how analytics can drive smarter outcomes. Those experiences showed me both sides of tech: what users see and what powers it under the hood.
                  </p>

                  <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700">
                    <p className="mb-4 font-semibold text-white">Now, I’m combining everything:</p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>Analytical mindset from AI and data work</li>
                      <li>User-focused approach from SEN support</li>
                      <li>Operational awareness and resilience from retail</li>
                      <li>Engineering skills across Python, Java, SQL, and modern Web frameworks</li>
                    </ul>
                  </div>

                  <p>
                    I’m not just learning how to write code — I’m learning how to solve problems that matter, for real people, with real constraints.
                  </p>
                  <p>
                    That’s why I’m drawn to roles where technology and insight come together — whether that’s improving systems as a Tech Analyst or building full-stack solutions that help organisations grow. I want to work where I can keep learning fast, collaborate across teams, and contribute to products that make life simpler, more accessible, and more intelligent.
                  </p>
                </div>
              </div>

              <div className="flex flex-col h-full">
                <ExperienceTimeline />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-red-500 font-bold mb-6 uppercase tracking-widest text-sm">Development</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="border-b border-gray-800 pb-2">Python (Scikit-learn, Pandas, NumPy)</li>
                      <li className="border-b border-gray-800 pb-2">JavaScript (ES6+, Node.js)</li>
                      <li className="border-b border-gray-800 pb-2">Java (Swing, OOP, Spring)</li>
                      <li className="border-b border-gray-800 pb-2">SQL & SQLite (Database Design)</li>
                      <li className="border-b border-gray-800 pb-2">React, Tailwind, Framer Motion</li>
                      <li className="border-b border-gray-800 pb-2">HTML5, CSS3, Responsive Design</li>
                      <li className="border-b border-gray-800 pb-2">Streamlit & Folium</li>
                      <li className="border-b border-gray-800 pb-2">RESTful APIs & JSON</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-red-500 font-bold mb-6 uppercase tracking-widest text-sm">Tools & Design</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="border-b border-gray-800 pb-2">Figma (Prototyping & Wireframing)</li>
                      <li className="border-b border-gray-800 pb-2">Git & GitHub (Version Control)</li>
                      <li className="border-b border-gray-800 pb-2">VS Code & IntelliJ IDEA</li>
                      <li className="border-b border-gray-800 pb-2">Jupyter Notebook & Google Colab</li>
                      <li className="border-b border-gray-800 pb-2">Agile & Scrum Methodology</li>
                      <li className="border-b border-gray-800 pb-2">UI/UX Principles & Accessibility</li>
                      <li className="border-b border-gray-800 pb-2">Vercel & Netlify (Deployment)</li>
                      <li className="border-b border-gray-800 pb-2">Chrome DevTools & Debugging</li>
                    </ul>
                  </div>
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
