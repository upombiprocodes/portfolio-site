import React from 'react';
import { Github, Mail, FileText } from 'lucide-react';
import cvFile from '../assets/cv.pdf?url';

const Footer = () => {
    return (
        <footer id="footer" className="bg-black text-white py-20 border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div id="contact">
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">Let's work together.</h2>
                    </div>

                    <div className="mt-8 md:mt-0 flex gap-6 items-center">
                        <a
                            href={cvFile}
                            download="Upom_Bipro_CV.pdf"
                            className="flex items-center gap-2 px-4 py-2 bg-white text-black font-bold rounded-full text-sm hover:bg-gray-200 transition-colors"
                        >
                            <FileText className="w-4 h-4" />
                            <span>CV</span>
                        </a>
                        <a href="mailto:bipro.2004@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/upombiprocodes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 pt-8 border-t border-gray-900">
                    <p>&copy; {new Date().getFullYear()} Upom Bipro. All rights reserved.</p>
                    <p>Built by Upom</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
