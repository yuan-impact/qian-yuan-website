'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import content from '@/data/content.json';
import { useAnimations } from '@/hooks/useAnimations';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = content.hero.slides;
  const { fadeInUp, fadeInLeft, scaleIn } = useAnimations();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    // Animate content when slide changes
    if (titleRef.current) {
      fadeInUp(titleRef.current, 200);
    }
    if (subtitleRef.current) {
      fadeInLeft(subtitleRef.current, 400);
    }
    if (buttonsRef.current) {
      scaleIn(buttonsRef.current, 600);
    }
  }, [currentSlide, fadeInUp, fadeInLeft, scaleIn]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Planet background image */}
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div>
              <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold font-display mb-6 leading-tight opacity-0">
                <span className="text-white">{slides[currentSlide].title.split(' ').slice(0, -2).join(' ')}</span>
                <br />
                <span className="text-blue-400 gradient-text">{slides[currentSlide].title.split(' ').slice(-2).join(' ')}</span>
              </h1>
              
              <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl opacity-0">
                {slides[currentSlide].subtitle}
              </p>
              
              <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 opacity-0">
		<a
		    href="/research"
                    className="btn-primary px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300 cursor-pointer">
                  Explore Research
                </a> 
		<a
		    href="/research/giant-impact"
                    className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/30 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 cursor-pointer">
                  View Publications
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group cursor-pointer"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group cursor-pointer"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide
                  ? 'bg-blue-400 scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-20 animate-bounce">
        <div className="flex flex-col items-center text-white/70">
          <span className="text-sm mb-2">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
