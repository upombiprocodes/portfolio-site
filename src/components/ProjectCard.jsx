import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, category, image, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative w-full aspect-[4/3] overflow-hidden cursor-pointer"
        >
            {/* Image Background */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image})` }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex justify-end">
                    <div className="bg-white rounded-full p-3">
                        <ArrowUpRight className="text-black w-6 h-6" />
                    </div>
                </div>

                <div>
                    <p className="text-red-500 font-bold tracking-widest text-sm mb-2 uppercase">{category}</p>
                    <h3 className="text-4xl font-bold text-white">{title}</h3>
                </div>
            </div>

            {/* Default visible content (bottom left) */}
            <div className="absolute bottom-8 left-8 group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="text-gray-300 text-sm">{category}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
