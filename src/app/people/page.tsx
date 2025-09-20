import Link from 'next/link';
import Image from 'next/image';
import content from '@/data/content.json';

export default function People() {
  const peopleContent = content.pages.people;

  return (
    <div className="pt-16 bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-8 text-white">
              {peopleContent.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              {peopleContent.content}
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              {peopleContent.teamSectionTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {peopleContent.teamSectionSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peopleContent.team.map((member: any, index: number) => (
              <div key={index} className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden hover:border-blue-500/50 transition-all duration-300 group">
                {/* Profile Image */}
                <div className="aspect-square bg-gradient-to-br from-blue-900/20 to-cyan-900/20 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold mb-2">
                    {member.title}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {member.affiliation}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill: string, skillIndex: number) => (
                      <span key={skillIndex} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Contact */}
                  <a 
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact
                  </a>

		{/* Insert CV here */}
		{member.cv && (
                    <>
                      <span className="mx-2 text-gray-400">·</span>
                      <a
			href=member.cv
                        class= "inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        CV
                      </a >
                    </>
                  )}



                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Groups */}
      <section className="section-padding bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              {peopleContent.researchGroupsTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {peopleContent.researchGroupsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {peopleContent.researchGroups.map((group: any, index: number) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl text-center border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="text-4xl mb-4">{group.icon}</div>
                <h3 className="text-lg font-bold font-display mb-3 text-white">
                  {group.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {group.description}
                </p>
                <div className="text-blue-400 font-semibold text-sm">
                  {group.members} Members
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborations */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              {peopleContent.collaborationsTitle}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {peopleContent.collaborationsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {peopleContent.collaborations.map((collab: any, index: number) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700">
                <h3 className="text-lg font-bold font-display text-white mb-2">
                  {collab.institution}
                </h3>
                <p className="text-blue-400 font-medium text-sm mb-3">
                  {collab.department}
                </p>
                <p className="text-gray-300 text-sm">
                  {collab.focus}
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
            {peopleContent.ctaTitle}
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {peopleContent.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="btn-primary px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg transition-all duration-300"
            >
              View Opportunities
            </Link>
            <Link
              href="/research"
              className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-white/30 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              Explore Research
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
