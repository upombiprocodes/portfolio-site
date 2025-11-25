import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-20 border-t border-gray-900">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4">Let's work together.</h2>
                        <a href="mailto:bipro.2004@gmail.com" className="text-xl text-gray-400 hover:text-white transition-colors border-b border-gray-700 hover:border-white pb-1">
                            bipro.2004@gmail.com
                        </a>
                    </div>

                    <div className="mt-8 md:mt-0 flex gap-6">
                        <a href="https://github.com/upombiprocodes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
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
