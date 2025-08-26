'use client';

import Link from 'next/link';
import content from '@/data/content.json';
import researchProjects from '@/data/research-projects.json';
import { useScrollAnimations } from '@/hooks/useAnimations';
import { useEffect, useRef } from 'react';

export default function Research() {
  const researchContent = content.pages.research;
  const { observeElement } = useScrollAnimations();
  const heroRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.dataset.animation = 'fadeInUp';
      heroRef.current.dataset.delay = '200';
      observeElement(heroRef.current);
    }
    if (areasRef.current) {
      areasRef.current.dataset.animation = 'fadeInUp';
      areasRef.current.dataset.delay = '400';
      observeElement(areasRef.current);
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
              {researchContent.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              {researchContent.content}
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={areasRef} className="text-center mb-16 opacity-0">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              {researchContent.researchAreasTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {researchContent.researchAreasSubtitle}
            </p>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0">
            {Object.entries(researchProjects).map(([key, project]) => {
              const slug = key.toLowerCase().replace(/[^a-z0-9]+/g, '-');
              const category = project.title.split(':')[0].trim();
              const keywords = project.content.split(' ').slice(0, 5).map(word => word.replace(/[^a-zA-Z]/g, '')).filter(word => word.length > 4);
              
              return (
                <Link key={key} href={`/research/${slug}`}>
                  <div className="research-card bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full group cursor-pointer">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
                          {category}
                        </div>
                        <h3 className="text-2xl font-bold font-display text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                          {project.title.split(':')[1]?.trim() || project.title}
                        </h3>
                      </div>
                      <div className="ml-4 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {project.content.substring(0, 150)}...
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {keywords.slice(0, 3).map((keyword: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                          {keyword}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <span>{project.sections.length} sections</span>
                      <span>{project.publications.length} publications</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="section-padding bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
                {researchContent.methodologyTitle}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                {researchContent.methodologyContent}
              </p>
              <div className="space-y-4">
                {researchContent.methods.map((method: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">{method}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold font-display mb-6 text-white">
                {researchContent.impactTitle}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {researchContent.impactStats.map((stat: any, index: number) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">{stat.value}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-12 rounded-3xl border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              {researchContent.ctaTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {researchContent.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/people"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300"
              >
                Meet Our Team
              </Link>
              <Link
                href="/join"
                className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/30 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                Join Our Research
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}