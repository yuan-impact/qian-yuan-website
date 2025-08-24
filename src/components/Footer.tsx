import Link from 'next/link';
import content from '@/data/content.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-xl font-bold font-space-grotesk">
                <span className="text-blue-400">DR. QIAN</span>
                <span className="text-white ml-2">YUAN</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              {content.site.description}
            </p>
            <div className="mt-6">
              <p className="text-gray-500 text-xs">
                Research in Earth Sciences • Academic Excellence • Scientific Innovation
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {content.navigation.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4">Research Areas</h3>
            <ul className="space-y-2">
              {content.footer.researchAreas.map((area: { name: string; slug: string }, index: number) => (
                <li key={index}>
                  <Link
                    href={`/research/${area.slug}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © {currentYear} Dr. Qian Yuan. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link
                href="/contact"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
              >
                Privacy
              </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;