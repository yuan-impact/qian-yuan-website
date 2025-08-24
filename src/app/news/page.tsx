import content from '@/data/content.json';

export default function News() {
  const newsContent = content.pages.news;



  return (
    <div className="pt-16 bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              Latest News
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with our recent discoveries, achievements, and announcements
            </p>
          </div>

          {/* Featured Article */}
          <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden mb-12 hover:border-blue-500/50 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-square bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center">
                <div className="text-8xl opacity-50">📰</div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                    {newsContent.newsItems[0].category}
                  </span>
                  <span className="text-gray-400 text-sm">{newsContent.newsItems[0].date}</span>
                </div>
                <h3 className="text-3xl font-bold font-display text-white mb-6">
                  {newsContent.newsItems[0].title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  {newsContent.newsItems[0].content}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {newsContent.newsItems[0].tags.map((tag: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-slate-700 text-gray-300 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Full Article Content */}
                <div className="mt-6 p-4 bg-slate-700/30 rounded-lg border-l-4 border-blue-500">
                  <h4 className="text-white font-semibold mb-3">Key Research Findings</h4>
                  <div className="text-gray-300 text-sm space-y-2">
                    <p>• Numerical models demonstrate how giant impact events during Earth's formation could have created persistent heterogeneities in the lower mantle</p>
                    <p>• Seismic tomography data shows structural similarities between observed LLSVPs and our impact-generated models</p>
                    <p>• New insights into the thermal and chemical evolution of Earth's deep interior over geological timescales</p>
                    <p>• Implications for understanding early Earth bombardment history and planetary formation processes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsContent.newsItems.slice(1).map((item: any) => (
              <div key={item.id} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
                {/* News Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center">
                  <div className="text-4xl opacity-50">📰</div>
                </div>

                {/* News Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 bg-slate-700 text-gray-300 text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                    <span className="text-gray-400 text-xs">{item.date}</span>
                  </div>
                  <h3 className="text-lg font-bold font-display text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag: string, index: number) => (
                      <span key={index} className="px-2 py-1 bg-slate-700 text-gray-400 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Extended Content */}
                  <div className="mt-3 p-3 bg-slate-700/30 rounded text-xs text-gray-300">
                    <p className="mb-2"><strong>Research Impact:</strong> This work provides new constraints on early Earth processes and contributes to our understanding of planetary formation mechanisms.</p>
                    <p><strong>Methodology:</strong> Advanced computational modeling combined with observational data analysis and laboratory experiments.</p>
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