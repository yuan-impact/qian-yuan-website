import Link from 'next/link';
import { notFound } from 'next/navigation';
import researchProjects from '@/data/research-projects.json';

interface ResearchProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ResearchProjectPage({ params }: ResearchProjectPageProps) {
  // Find the project based on the slug
  const projectEntry = Object.entries(researchProjects).find(([key]) => {
    const slug = key.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return slug === params.slug;
  });

  if (!projectEntry) {
    notFound();
  }

  const [key, project] = projectEntry;
  const category = project.title.split(':')[0].trim();
  const projectTitle = project.title.split(':')[1]?.trim() || project.title;

  return (
    <div className="pt-16 bg-slate-900 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-800/50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-500">/</span>
            <Link href="/research" className="text-gray-400 hover:text-white transition-colors">
              Research
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-white">{projectTitle}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-900/30 to-cyan-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-sm font-semibold text-blue-400 mb-4 uppercase tracking-wider">
              {category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-white">
              {projectTitle}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {project.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 mb-8">
                <h2 className="text-2xl font-bold font-display mb-6 text-white">
                  Research Overview
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.content}
                </p>
              </div>

              {/* Research Sections */}
              <div className="space-y-8">
                {project.sections.map((section, index) => (
                  <div key={index} className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
                    <h3 className="text-xl font-bold font-display mb-4 text-white">
                      {section.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>

              {/* Research Images */}
              {project.images.length > 0 && (
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 mt-8">
                  <h3 className="text-2xl font-bold font-display mb-6 text-white">
                    Research Images
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.map((image, index) => (
                      <div key={index} className="group">
                        <div className="relative overflow-hidden rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        {image.caption && (
                          <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                            {image.caption}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Publications */}
              {project.publications.length > 0 && (
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 mt-8">
                  <h3 className="text-2xl font-bold font-display mb-6 text-white">
                    Publications
                  </h3>
                  <div className="space-y-6">
                    {project.publications.map((publication, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-6">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {publication.title}
                        </h4>
                        <p className="text-gray-300 mb-2">
                          {publication.authors}
                        </p>
                        <p className="text-gray-400 text-sm">
                          <span className="font-medium">{publication.journal}</span> ({publication.year})
                          {publication.doi && (
                            <>
                              {' • '}
                              <a 
                                href={`https://doi.org/${publication.doi}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                DOI: {publication.doi}
                              </a>
                            </>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Info */}
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mb-8">
                <h3 className="text-lg font-bold font-display mb-4 text-white">
                  Quick Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Research Area</div>
                    <div className="text-white font-medium">{category}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Sections</div>
                    <div className="text-white font-medium">{project.sections.length}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Publications</div>
                    <div className="text-white font-medium">{project.publications.length}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Images</div>
                    <div className="text-white font-medium">{project.images.length}</div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="mt-8 pt-6 border-t border-slate-700">
                  <Link
                    href="/research"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    Back to Research
                  </Link>
                </div>
              </div>

              {/* Related Research */}
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-lg font-bold font-display mb-4 text-white">
                  Related Research
                </h3>
                <div className="space-y-3">
                  {Object.entries(researchProjects)
                    .filter(([otherKey]) => otherKey !== key)
                    .slice(0, 3)
                    .map(([otherKey, otherProject]) => {
                      const otherSlug = otherKey.toLowerCase().replace(/[^a-z0-9]+/g, '-');
                      const otherCategory = otherProject.title.split(':')[0].trim();
                      const otherTitle = otherProject.title.split(':')[1]?.trim() || otherProject.title;
                      
                      return (
                        <Link key={otherKey} href={`/research/${otherSlug}`}>
                          <div className="p-4 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-all duration-300 group">
                            <div className="text-xs text-blue-400 mb-1 uppercase tracking-wider">
                              {otherCategory}
                            </div>
                            <div className="text-white font-medium text-sm group-hover:text-blue-400 transition-colors">
                              {otherTitle}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-12 rounded-3xl border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">
              Interested in This Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Learn more about our research group, publications, and opportunities to collaborate.
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

// Generate static params for all research projects
export async function generateStaticParams() {
  return Object.keys(researchProjects).map((key) => ({
    slug: key.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
  }));
}