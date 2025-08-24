import HeroSlider from '@/components/HeroSlider';
import Link from 'next/link';
import content from '@/data/content.json';

export default function Home() {
  const homeContent = content.pages.home;

  return (
    <div className="pt-16"> {/* Account for fixed navigation */}
      {/* Hero Section */}
      <HeroSlider />

      {/* Main Content */}
      <div className="bg-slate-900">
        {/* Introduction Section */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-8 text-white">
                {homeContent.title}
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                {homeContent.content}
              </p>
            </div>
          </div>
        </section>

        {/* Research Focus Sections */}
        <section className="section-padding bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {homeContent.sections.map((section, index) => (
                <div key={index} className={`animate-fade-in-up ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                  <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                    <h3 className="text-2xl font-bold font-display mb-6 text-white">
                      {section.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {section.content}
                    </p>
                    <Link
                      href="/research"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas Grid */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
                {homeContent.researchAreasTitle}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {homeContent.researchAreasSubtitle}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {homeContent.researchAreas.map((area: any, index: number) => (
                <div key={index} className="research-card bg-slate-800 p-6 rounded-xl text-center group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold font-display mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-gradient-to-r from-blue-900/20 to-cyan-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              {homeContent.ctaTitle}
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {homeContent.ctaSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/research"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300"
              >
                View Research
              </Link>
              <Link
                href="/join"
                className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/30 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
