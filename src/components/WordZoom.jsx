import React, { useEffect, useRef } from 'react';

const WordZoom = () => {
    const processedElements = useRef(new WeakSet());
    const isProcessing = useRef(false);

    useEffect(() => {
        const applyWordZoom = () => {
            if (isProcessing.current) return;
            isProcessing.current = true;

            requestAnimationFrame(() => {
                const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a');

                elements.forEach(element => {
                    // Skip if already processed
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
                        `<span class="word-hover" style="display: inline-block; transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1), color 0.15s cubic-bezier(0.4, 0, 0.2, 1); cursor: default; margin-right: 0.25em; will-change: transform;">${word}</span>`
                    ).join('');

                    element.innerHTML = wrappedWords;
                    processedElements.current.add(element);

                    // Add hover listeners with passive events
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

                isProcessing.current = false;
            });
        };

        // Debounce with requestIdleCallback fallback
        let debounceTimer;
        const debouncedApply = () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                if (window.requestIdleCallback) {
                    window.requestIdleCallback(applyWordZoom, { timeout: 1000 });
                } else {
                    applyWordZoom();
                }
            }, 200);
        };

        // Initial run
        const timeoutId = setTimeout(() => {
            if (window.requestIdleCallback) {
                window.requestIdleCallback(applyWordZoom, { timeout: 1000 });
            } else {
                applyWordZoom();
            }
        }, 1000);

        // Optimized observer
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
