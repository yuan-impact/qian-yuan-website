import content from '@/data/content.json';

export default function Outreach() {
  const outreachContent = content.pages.outreach;





  return (
    <div className="pt-16 bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-8 text-white">
              {outreachContent.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              {outreachContent.content}
            </p>
          </div>
        </div>
      </section>

      {/* Outreach Programs */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              {outreachContent.programsTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {outreachContent.programsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outreachContent.programs.map((program: any, index: number) => (
              <div key={index} className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
                {/* Program Image */}
                <div className="aspect-video bg-gradient-to-br from-blue-900/20 to-cyan-900/20 flex items-center justify-center">
                  <div className="text-6xl opacity-50">
			<img src={program.image} alt="" />
                  </div>
                </div>

                {/* Program Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-display text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Program Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Audience</div>
                      <div className="text-white font-medium text-sm">{program.audience}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Frequency</div>
                      <div className="text-white font-medium text-sm">{program.frequency}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Reach</div>
                      <div className="text-white font-medium text-sm">{program.participants}</div>
                    </div>
                  </div>

                  {/* Additional Program Details */}
                  <div className="mt-4 p-4 bg-slate-700/50 rounded-lg">
                    <h4 className="text-white font-semibold mb-2">Program Highlights</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Interactive hands-on activities and demonstrations</li>
                      <li>• Age-appropriate curriculum aligned with educational standards</li>
                      <li>• Professional development opportunities for educators</li>
                      <li>• Take-home materials and resources for continued learning</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="section-padding bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              {outreachContent.impactTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {outreachContent.impactSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outreachContent.impactStats.map((stat: any, index: number) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl text-center border border-slate-700">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-white font-semibold mb-3">{stat.label}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Press */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              {outreachContent.mediaTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {outreachContent.mediaSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {outreachContent.mediaFeatures.map((feature: any, index: number) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-display text-white mb-2">
                      {feature.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-blue-400 font-medium">{feature.outlet}</span>
                      <span className="text-gray-400">{feature.type}</span>
                      <span className="text-gray-400">{feature.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
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
            {outreachContent.ctaTitle}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {outreachContent.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300">
              Volunteer With Us
            </button>
            <button className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/30 hover:border-blue-400 hover:text-blue-400 transition-all duration-300">
              Request a Speaker
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
