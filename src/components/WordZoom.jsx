import React, { useEffect, useRef } from 'react';

const WordZoom = () => {
    const processedElements = useRef(new WeakSet());

    useEffect(() => {
        const applyWordZoom = () => {
            const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a');

            elements.forEach(element => {
                // Skip if already processed using WeakSet for better performance
                if (processedElements.current.has(element)) return;

                // Skip if has SVG or styled spans
                if (element.querySelector('svg') ||
                    element.querySelector('span[class*="text-"]') ||
                    element.querySelector('span[class*="bg-gradient"]')) {
                    processedElements.current.add(element);
                    return;
                }

                const text = element.textContent;
                if (!text || text.trim().length === 0) return;

                const words = text.split(' ');
                const wrappedWords = words.map(word =>
                    `<span class="word-hover" style="display: inline-block; transition: transform 0.2s ease, color 0.2s ease; cursor: default; margin-right: 0.25em; will-change: transform;">${word}</span>`
                ).join('');

                element.innerHTML = wrappedWords;
                processedElements.current.add(element);

                // Add hover listeners with passive event listeners
                element.querySelectorAll('.word-hover').forEach(wordSpan => {
                    wordSpan.addEventListener('mouseenter', () => {
                        wordSpan.style.transform = 'scale(1.2)';
                        wordSpan.style.color = '#e50914';
                    }, { passive: true });

                    wordSpan.addEventListener('mouseleave', () => {
                        wordSpan.style.transform = 'scale(1)';
                        wordSpan.style.color = '';
                    }, { passive: true });
                });
            });
        };

        // Debounce function
        let debounceTimer;
        const debouncedApply = () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(applyWordZoom, 150);
        };

        // Run once on mount
        const timeoutId = setTimeout(applyWordZoom, 800);

        // Observe with debouncing
        const observer = new MutationObserver((mutations) => {
            const hasNewNodes = mutations.some(mutation => mutation.addedNodes.length > 0);
            if (hasNewNodes) {
                debouncedApply();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(debounceTimer);
            observer.disconnect();
        };
    }, []);

    return null;
};

export default WordZoom;
