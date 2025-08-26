import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

export const useAnimations = () => {
  const fadeInUp = (element: HTMLElement | string, delay = 0) => {
    return animate(element, {
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 800,
      delay: delay,
      easing: 'easeOutCubic'
    });
  };

  const fadeInLeft = (element: HTMLElement | string, delay = 0) => {
    return animate(element, {
      translateX: [-50, 0],
      opacity: [0, 1],
      duration: 800,
      delay: delay,
      easing: 'easeOutCubic'
    });
  };

  const fadeInRight = (element: HTMLElement | string, delay = 0) => {
    return animate(element, {
      translateX: [50, 0],
      opacity: [0, 1],
      duration: 800,
      delay: delay,
      easing: 'easeOutCubic'
    });
  };

  const scaleIn = (element: HTMLElement | string, delay = 0) => {
    return animate(element, {
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 600,
      delay: delay,
      easing: 'easeOutBack'
    });
  };

  const staggerCards = (elements: HTMLElement[] | string) => {
    return animate(elements, {
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 600,
      delay: stagger(100),
      easing: 'easeOutCubic'
    });
  };

  const slideInFromBottom = (element: HTMLElement | string, delay = 0) => {
    return animate(element, {
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: delay,
      easing: 'easeOutExpo'
    });
  };

  return {
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerCards,
    slideInFromBottom
  };
};

export const useScrollAnimations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const animationType = target.dataset.animation;
            const delay = parseInt(target.dataset.delay || '0');

            switch (animationType) {
              case 'fadeInUp':
                animate(target, {
                  translateY: [50, 0],
                  opacity: [0, 1],
                  duration: 800,
                  delay: delay,
                  easing: 'easeOutCubic'
                });
                break;
              case 'fadeInLeft':
                animate(target, {
                  translateX: [-50, 0],
                  opacity: [0, 1],
                  duration: 800,
                  delay: delay,
                  easing: 'easeOutCubic'
                });
                break;
              case 'fadeInRight':
                animate(target, {
                  translateX: [50, 0],
                  opacity: [0, 1],
                  duration: 800,
                  delay: delay,
                  easing: 'easeOutCubic'
                });
                break;
              case 'scaleIn':
                animate(target, {
                  scale: [0.8, 1],
                  opacity: [0, 1],
                  duration: 600,
                  delay: delay,
                  easing: 'easeOutBack'
                });
                break;
            }
            
            observerRef.current?.unobserve(target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const observeElement = (element: HTMLElement) => {
    if (observerRef.current && element) {
      observerRef.current.observe(element);
    }
  };

  return { observeElement };
};