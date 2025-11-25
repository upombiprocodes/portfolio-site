import React from 'react';
import { motion } from 'framer-motion';

const ProjectSection = ({ title, category, image, description, index, githubLink }) => {
    const isEven = index % 2 === 0;

    return (
        <section className="py-20 md:py-32 border-b border-zinc-900 last:border-none">
            <div className="container mx-auto px-6">
                <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${isEven ? '' : 'md:flex-row-reverse'}`}>

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2, margin: "100px" }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 will-change-transform"
                                style={{ backgroundImage: `url(${image})` }}
                            ></div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.2, margin: "100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                        className="w-full md:w-1/2"
                    >
                        <p className="text-red-500 font-bold tracking-widest text-sm mb-6 uppercase">{category}</p>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{title}</h3>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">{description}</p>

                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white font-bold tracking-widest hover:text-red-500 transition-colors group"
                            >
                                VIEW
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        )}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
