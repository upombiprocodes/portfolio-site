import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Teaching Assistant",
        company: "SEN Schools, UK",
        period: "Present",
        current: true,
        description: "• Support 15+ students with special educational needs daily\n• Break down complex concepts into accessible learning materials\n• Develop patience & communication skills essential for UX thinking\n• Manage challenging situations with calm, solution-oriented approach"
    },
    {
        role: "Retail Assistant",
        company: "Marks & Spencer",
        period: "Present",
        current: true,
        description: "• Handle 100+ customer interactions during peak hours\n• Manage stock logistics and resolve queries in real-time\n• Prioritize tasks effectively under time pressure\n• Understand end-user experience and operational efficiency"
    },
    {
        role: "AI Engineer Intern",
        company: "Creative IT, Bangladesh",
        period: "Previous",
        current: false,
        description: "• Built data processing automation reducing manual workload by 40%\n• Developed ML models using Python, Pandas & Scikit-learn\n• Translated raw data into actionable business insights\n• Communicated technical findings to non-technical stakeholders"
    },
    {
        role: "Junior Frontend Developer",
        company: "Amra IT, Bangladesh",
        period: "Previous",
        current: false,
        description: "• Delivered 5+ client projects from Figma mockups to production\n• Built responsive web pages with HTML, CSS & JavaScript\n• Optimized load times improving user engagement\n• Managed client expectations and iterated on feedback"
    }
];

const ExperienceTimeline = () => {
    return (
        <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">Experience</h2>
            <div className="relative border-l-2 border-zinc-800 ml-3 space-y-16">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="relative pl-8 group"
                    >
                        {/* Dot on the line */}
                        <div className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 ${exp.current ? 'bg-red-500 border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-zinc-900 border-zinc-600 group-hover:border-red-500 transition-colors'}`} />

                        <div className="flex flex-col mb-2">
                            <div className="flex flex-row items-baseline justify-between">
                                <h4 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">{exp.role}</h4>
                                <span className={`text-sm font-mono ${exp.current ? 'text-red-400' : 'text-zinc-500'}`}>{exp.period}</span>
                            </div>
                            <p className="text-zinc-400 font-medium text-lg">{exp.company}</p>
                        </div>

                        <div className="text-zinc-500 text-base leading-relaxed">
                            {exp.description.split('\n').map((line, i) => (
                                <p key={i} className="mb-1">{line}</p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceTimeline;
