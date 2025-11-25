import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import InteractiveBackground from './InteractiveBackground';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Interactive Background */}
            <InteractiveBackground />

            <div className="relative z-20 container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter"
                >
                    DIGITAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-600">EXPERIENCES</span>{' '}
                    <br />
                    THAT MATTER
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-semibold"
                >
                    I craft interactive websites and data-driven applications.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <a
                        href="#work"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold tracking-widest hover:bg-gray-200 transition-colors rounded-full"
                    >
                        VIEW WORK
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
            >
                <ArrowDown className="text-white w-6 h-6" />
            </motion.div>
        </section>
    );
};

export default Hero;
