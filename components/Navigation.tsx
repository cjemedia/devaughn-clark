'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#speaking', label: 'Speaking' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a 
              href="#" 
              className={`font-cormorant text-xl lg:text-2xl font-semibold tracking-tight transition-colors duration-300 ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              DeVaughn Clark
            </a>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10 lg:gap-12">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:opacity-60 ${
                    isScrolled ? 'text-charcoal' : 'text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            {/* CTA Button */}
            <a
              href="#contact"
              className={`hidden md:inline-flex items-center text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 ${
                isScrolled 
                  ? 'bg-charcoal text-white hover:bg-sage-500' 
                  : 'bg-white text-charcoal hover:bg-cream'
              }`}
            >
              Book DeVaughn
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`md:hidden p-2 transition-colors ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-charcoal z-[100] transition-all duration-500 flex flex-col ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white p-2"
            aria-label="Close menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Nav Links */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-4xl md:text-5xl font-cormorant font-semibold hover:text-sage-200 transition-colors"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: isMobileMenuOpen ? 'fadeInUp 0.5s ease forwards' : 'none'
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 bg-sage-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-sage-400 transition-colors"
          >
            Book DeVaughn
          </a>
        </nav>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
