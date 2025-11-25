import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import InteractiveBackground from './InteractiveBackground';

                >
    <a
        href="#work"
        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold tracking-widest hover:bg-gray-200 transition-colors rounded-full"
    >
        VIEW WORK
    </a>
                </motion.div >
            </div >

    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
    >
        <ArrowDown className="text-white w-6 h-6" />
    </motion.div>
        </section >
    );
};

export default Hero;
