'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import content from '@/data/content.json';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-xl font-bold font-space-grotesk">
              <span className="text-blue-400">{content.logo.primary}</span>
              <span className="text-white ml-2">{content.logo.secondary}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {content.navigation.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  href={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                    isActive(item.path) ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </Link>
                
                {/* Dropdown for Research */}
                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-slate-700">
                    <div className="p-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.path}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 hover:bg-slate-700 hover:text-blue-400 ${
                            isActive(child.path) ? 'text-blue-400 bg-slate-700' : 'text-gray-300'
                          }`}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800 rounded-lg mt-2 border border-slate-700">
              {content.navigation.map((item) => (
                <div key={item.id}>
                  <Link
                    href={item.path}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 hover:bg-slate-700 hover:text-blue-400 ${
                      isActive(item.path) ? 'text-blue-400 bg-slate-700' : 'text-gray-300'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Mobile Research Submenu */}
                  {item.children && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.path}
                          className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 hover:bg-slate-700 hover:text-blue-400 ${
                            isActive(child.path) ? 'text-blue-400 bg-slate-700' : 'text-gray-400'
                          }`}
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;