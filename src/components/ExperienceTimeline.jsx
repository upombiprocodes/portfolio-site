import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Teaching Assistant",
        company: "SEN Schools",
        period: "Present",
        current: true,
        description: "I currently work with students who have special educational needs, a role that requires a high degree of adaptability, patience, and emotional intelligence. My daily responsibilities involve breaking down complex academic concepts into accessible, bite-sized pieces of information that cater to individual learning styles. This experience has been invaluable in shaping my approach to user experience design, teaching me that clarity, empathy, and structure are the foundations of effective communication. It has also honed my ability to stay calm under pressure and manage challenging behavioral situations with a solution-oriented mindset."
    },
    {
        role: "Retail Assistant",
        company: "Marks & Spencer",
        period: "Present",
        current: true,
        description: "At Marks & Spencer, I work in a fast-paced retail environment where operational efficiency and customer satisfaction are paramount. I am responsible for managing stock logistics, resolving customer queries on the spot, and ensuring smooth store operations during peak hours. This role has sharpened my problem-solving skills and my ability to prioritize tasks effectively when time is limited. It has also given me a deep appreciation for the 'end-user' experience, understanding that every system, process, or interaction must be designed to be as seamless and frustration-free as possible for the person on the other side."
    },
    {
        role: "AI Engineer Intern",
        company: "Creative IT",
        period: "Previous",
        current: false,
        description: "During my internship as an AI Engineer, I immersed myself in the world of data analytics and machine learning. I worked on developing and optimizing algorithms to automate data processing tasks, which significantly reduced manual workload for the team. I gained hands-on experience with Python libraries like Pandas and Scikit-learn, and learned how to translate raw data into actionable insights. This role taught me the importance of rigorous testing and validation, as well as how to communicate technical findings to non-technical stakeholders, bridging the gap between complex code and business value."
    },
    {
        role: "Junior Frontend Web Developer",
        company: "Amra IT",
        period: "Previous",
        current: false,
        description: "As a Junior Frontend Developer, I collaborated with clients to bring their tech visions to life. I was responsible for translating design mockups into responsive, interactive web pages using HTML, CSS, and JavaScript. I focused heavily on ensuring cross-browser compatibility and optimizing load times to enhance user engagement. This experience was my first deep dive into the professional software development lifecycle, teaching me how to manage client expectations, iterate on feedback, and deliver high-quality code within strict deadlines. It solidified my passion for creating intuitive and visually appealing user interfaces."
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

                        <p className="text-zinc-500 text-base leading-relaxed text-justify">
                            {exp.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ExperienceTimeline;
