'use client';

import content from '@/data/content.json';
import { useScrollAnimations } from '@/hooks/useAnimations';
import { useEffect, useRef } from 'react';

export default function News() {
  const newsContent = content.pages.news;
  const { observeElement } = useScrollAnimations();
  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.dataset.animation = 'fadeInUp';
      heroRef.current.dataset.delay = '200';
      observeElement(heroRef.current);
    }
    if (featuredRef.current) {
      featuredRef.current.dataset.animation = 'fadeInLeft';
      featuredRef.current.dataset.delay = '400';
      observeElement(featuredRef.current);
    }
    if (gridRef.current) {
      gridRef.current.dataset.animation = 'fadeInUp';
      gridRef.current.dataset.delay = '600';
      observeElement(gridRef.current);
    }
  }, [observeElement]);



  return (
    <div className="pt-16 bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={heroRef} className="max-w-4xl mx-auto text-center opacity-0">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-8 text-white">
              {newsContent.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              {newsContent.content}
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={featuredRef} className="text-center mb-16 opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              Latest News
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with our recent discoveries, achievements, and announcements
            </p>
          </div>

          {/* Featured Article */}
          <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden mb-12 hover:border-blue-500/50 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Featured Image - Left Side */}
              <div className="lg:col-span-1">
                {newsContent.newsItems[0].image ? (
                  <img 
                    src={newsContent.newsItems[0].image} 
                    alt={newsContent.newsItems[0].title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-64 lg:h-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center">
                    <div className="text-8xl opacity-50">📰</div>
                  </div>
                )}
              </div>
              
              {/* Featured Content - Right Side */}
              <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                      {newsContent.newsItems[0].category}
                    </span>
                    <span className="text-gray-400 text-sm">{newsContent.newsItems[0].date}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-bold font-display text-white mb-6">
                    {newsContent.newsItems[0].title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {newsContent.newsItems[0].content}
                  </p>
                  
                  {/* Key Research Findings */}
                  {newsContent.newsItems[0].keyFindings && (
                    <div className="mt-6 p-4 bg-slate-700/30 rounded-lg border-l-4 border-blue-500">
                      <h4 className="text-white font-semibold mb-3">Key Research Findings</h4>
                      <div className="text-gray-300 text-sm space-y-2">
                        {newsContent.newsItems[0].keyFindings.map((finding: string, index: number) => (
                          <p key={index}>• {finding}</p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {newsContent.newsItems[0].tags.map((tag: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News Cards - Wide Layout */}
          <div ref={gridRef} className="space-y-8 opacity-0">
            {newsContent.newsItems.slice(1).map((item: any) => (
              <div key={item.id} className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* News Image - Left Side */}
                  <div className="lg:col-span-1">
                    {item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-64 lg:h-full bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center">
                        <div className="text-6xl opacity-50">📰</div>
                      </div>
                    )}
                  </div>

                  {/* News Content - Right Side */}
                  <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                          {item.category}
                        </span>
                        <span className="text-gray-400 text-sm">{item.date}</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold font-display text-white mb-4 group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {item.content}
                      </p>
                      
                      {/* Key Research Findings */}
                      {item.keyFindings && (
                        <div className="mt-6 p-4 bg-slate-700/30 rounded-lg border-l-4 border-blue-500">
                          <h4 className="text-white font-semibold mb-3">Key Research Findings</h4>
                          <div className="text-gray-300 text-sm space-y-2">
                            {item.keyFindings.map((finding: string, index: number) => (
                              <p key={index}>• {finding}</p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6 mt-6">
                        {item.tags.map((tag: string, index: number) => (
                          <span key={index} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join us at conferences, talks, and educational events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsContent.upcomingEvents.map((event: any, index: number) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded">
                        {event.type}
                      </span>
                      <span className="text-gray-400 text-sm">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-blue-400 text-sm mb-3">
                      📍 {event.location}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Research CTA */}
      <section className="section-padding bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
            {content.pages.home.ctaTitle}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {content.pages.home.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/research" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Explore Research
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a 
              href="/join-us" 
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-200"
            >
              Join Our Team
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}