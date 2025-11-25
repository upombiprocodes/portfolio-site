import React, { useEffect } from 'react';

const CharacterZoom = () => {
    useEffect(() => {
        const addCharacterZoom = () => {
            // Select all text elements
            const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span:not(.no-zoom)');

            elements.forEach(element => {
                // Skip if already processed or is an icon
                if (element.classList.contains('character-zoom-processed') || element.querySelector('svg')) {
                    return;
                }

                const text = element.textContent;
                if (!text || text.trim().length === 0) return;

                // Wrap each character in a span
                const wrappedText = text.split('').map(char => {
                    if (char === ' ') return ' ';
                    return `<span class="char-zoom" style="display: inline-block; transition: transform 0.15s ease;">${char}</span>`;
                }).join('');

                element.innerHTML = wrappedText;
                element.classList.add('character-zoom-processed');

                // Add hover effect to each character
                const chars = element.querySelectorAll('.char-zoom');
                chars.forEach(char => {
                    char.addEventListener('mouseenter', () => {
                        char.style.transform = 'scale(1.3)';
                        char.style.color = '#e50914';
                    });
                    char.addEventListener('mouseleave', () => {
                        char.style.transform = 'scale(1)';
                        char.style.color = '';
                    });
                });
            });
        };

        // Run after a short delay to ensure DOM is ready
        setTimeout(addCharacterZoom, 100);

        // Re-run when content changes (for dynamic content)
        const observer = new MutationObserver(() => {
            setTimeout(addCharacterZoom, 100);
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return () => observer.disconnect();
    }, []);

    return null; // This component doesn't render anything
};

export default CharacterZoom;
