import React from 'react';
import { motion } from 'framer-motion';

const ProjectSection = ({ title, category, image, description, index, githubLink }) => {
    const isEven = index % 2 === 0;

    target = "_blank"
    rel = "noopener noreferrer"
    className = "inline-flex items-center gap-2 text-white font-bold tracking-widest hover:text-red-500 transition-colors group"
        >
        VIEW
        < svg className = "w-5 h-5 group-hover:translate-x-1 transition-transform" fill = "none" stroke = "currentColor" viewBox = "0 0 24 24" >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg >
            </a >
        )}
    </motion.div >

                </div >
            </div >
        </section >
    );
};

export default ProjectSection;
