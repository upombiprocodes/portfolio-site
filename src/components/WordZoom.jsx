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

        // Run once on mount with a delay
        const timeoutId = setTimeout(applyWordZoom, 500);

        // Only observe for major DOM changes, not every mutation
        const observer = new MutationObserver((mutations) => {
            // Only re-run if new nodes were added
            const hasNewNodes = mutations.some(mutation => mutation.addedNodes.length > 0);
            if (hasNewNodes) {
                setTimeout(applyWordZoom, 100);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    return null;
};

export default WordZoom;
