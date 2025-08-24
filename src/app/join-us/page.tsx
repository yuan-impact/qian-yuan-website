import Link from 'next/link';
import content from '@/data/content.json';

export default function JoinUs() {
  const joinUsContent = content.pages.join;







  return (
    <div className="pt-16 bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-8 text-white">
              {joinUsContent.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              {joinUsContent.content}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#positions"
                className="btn-primary px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300"
              >
                View Open Positions
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              {joinUsContent.whyJoinTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {joinUsContent.whyJoinSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {joinUsContent.benefits.map((benefit: any, index: number) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-4xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold font-display text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="section-padding bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              {joinUsContent.researchAreasTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {joinUsContent.researchAreasSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {joinUsContent.researchAreas.map((area: any, index: number) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-xl font-bold font-display text-white mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {area.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill: string, skillIndex: number) => (
                    <span key={skillIndex} className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              {joinUsContent.positionsTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {joinUsContent.positionsSubtitle}
            </p>
          </div>

          <div className="space-y-8">
            {joinUsContent.positions.map((position: any, index: number) => (
              <div key={position.id} className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                          position.status === 'Open' 
                            ? 'bg-green-600 text-white' 
                            : 'bg-gray-600 text-gray-300'
                        }`}>
                          {position.status}
                        </span>
                        <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full border border-blue-600/30">
                          {position.type}
                        </span>
                        <span className="text-gray-400 text-sm">
                          Deadline: {position.deadline}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold font-display text-white mb-2">
                        {position.title}
                      </h3>
                      <p className="text-blue-400 mb-4">
                        {position.department}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Requirements
                      </h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req: string, index: number) => (
                          <li key={index} className="flex items-start space-x-3 text-gray-300">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">
                        Benefits
                      </h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit: string, index: number) => (
                          <li key={index} className="flex items-start space-x-3 text-gray-300">
                            <span className="text-green-400 mt-1">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-700">
                    <button className="btn-primary px-6 py-3 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              {joinUsContent.applicationProcessTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {joinUsContent.applicationProcessSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {joinUsContent.applicationProcess.map((step: any, index: number) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-12 rounded-3xl border border-slate-700">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
                {joinUsContent.contactTitle}
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                {joinUsContent.contactSubtitle}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    For Prospective Students
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Please include your CV, transcripts, and a brief statement of research interests.
                  </p>
                  <a
                    href="mailto:qian.yuan@university.edu?subject=Graduate Student Application"
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    qian.yuan@university.edu
                  </a>
                </div>
                
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    For Postdocs & Collaborators
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Please include your CV, research statement, and relevant publications.
                  </p>
                  <a
                    href="mailto:qian.yuan@university.edu?subject=Postdoc Application"
                    className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    qian.yuan@university.edu
                  </a>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:qian.yuan@university.edu"
                  className="btn-primary px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300"
                >
                  Send Email
                </a>
                <Link
                  href="/research"
                  className="px-8 py-4 border border-blue-500 text-blue-400 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                  Learn About Our Research
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}