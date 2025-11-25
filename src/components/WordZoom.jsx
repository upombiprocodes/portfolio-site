import React, { useEffect } from 'react';

const WordZoom = () => {
    useEffect(() => {
        const applyWordZoom = () => {
            const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a');

            elements.forEach(element => {
                // Skip if already processed, has SVG, or has styled spans (gradients, colors)
                if (element.classList.contains('word-zoom-applied') ||
                    element.querySelector('svg') ||
                    element.querySelector('span[class*="text-"]') ||
                    element.querySelector('span[class*="bg-gradient"]')) {
                    return;
                }

                const text = element.textContent;
                if (!text || text.trim().length === 0) return;

                const words = text.split(' ');
                const wrappedWords = words.map(word =>
                    `<span class="word-hover" style="display: inline-block; transition: transform 0.2s ease, color 0.2s ease; cursor: default; margin-right: 0.25em;">${word}</span>`
                ).join('');

                element.innerHTML = wrappedWords;
                element.classList.add('word-zoom-applied');

                // Add hover listeners
                element.querySelectorAll('.word-hover').forEach(wordSpan => {
                    wordSpan.addEventListener('mouseenter', () => {
                        wordSpan.style.transform = 'scale(1.2)';
                        wordSpan.style.color = '#e50914';
                    });
                    wordSpan.addEventListener('mouseleave', () => {
                        wordSpan.style.transform = 'scale(1)';
                        wordSpan.style.color = '';
                    });
                });
            });
        };

        setTimeout(applyWordZoom, 300);

        const observer = new MutationObserver(() => {
            setTimeout(applyWordZoom, 300);
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return () => observer.disconnect();
    }, []);

    return null;
};

export default WordZoom;
