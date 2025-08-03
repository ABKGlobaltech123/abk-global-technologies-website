import { useEffect } from 'react';

export const useAnimations = () => {
  useEffect(() => {
    // Create intersection observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class for fade-in animations
            if (entry.target.classList.contains('fade-in') ||
                entry.target.classList.contains('fade-in-up') ||
                entry.target.classList.contains('fade-in-left') ||
                entry.target.classList.contains('fade-in-right') ||
                entry.target.classList.contains('scale-in') ||
                entry.target.classList.contains('slide-in-bottom')) {
              entry.target.classList.add('visible');
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all animation elements
    const animationElements = document.querySelectorAll(
      '.fade-in, .fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .slide-in-bottom'
    );

    animationElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      animationElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};