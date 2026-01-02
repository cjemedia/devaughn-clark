'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 lg:py-32 bg-off-white"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Image Column */}
          <div 
            className={`lg:col-span-5 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl img-zoom">
                <img 
                  src="/images/headshot.jpg" 
                  alt="DeVaughn Clark"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-sage-200 rounded-2xl -z-10" />
              
              {/* Stats Badge */}
              <div className="absolute -bottom-4 left-6 lg:-left-4 bg-charcoal text-white p-5 lg:p-6 rounded-xl shadow-xl">
                <p className="font-cormorant text-4xl lg:text-5xl font-semibold">24</p>
                <p className="text-sm text-white/70 mt-1">Years Young &<br />Igniting Rooms</p>
              </div>
            </div>
          </div>
          
          {/* Content Column */}
          <div 
            className={`lg:col-span-7 lg:pl-4 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            
            <p className="text-sage-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              About
            </p>
            
            <h2 
              className="font-cormorant text-charcoal font-semibold leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
            >
              A Message Rooted<br />in Growth
            </h2>
            
            <div className="space-y-5 text-gray text-base lg:text-lg leading-relaxed">
              <p>
                DeVaughn Clark is a 24-year-old inspirational speaker from Chicago whose 
                message is rooted in one central theme — <strong className="text-charcoal font-semibold">Growth</strong>.
              </p>
              <p>
                With a natural ability to connect, DeVaughn brings high energy, raw authenticity, 
                and practical life lessons to help audiences grow in every area — life, relationships, 
                mindset, and courage.
              </p>
              <p>
                After speaking at events across schools, organizations, and community spaces, 
                DeVaughn continues to ignite rooms with his storytelling, humor, and motivational 
                energy. His talks inspire audiences to confront fears, embrace change, and take 
                ownership of their growth journey.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-5 mt-10 pt-10 border-t border-sage-200">
              <span className="text-sm text-gray font-medium">Follow</span>
              <a 
                href="https://instagram.com/devaughnnclark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border-2 border-charcoal/20 flex items-center justify-center hover:bg-charcoal hover:border-charcoal hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://facebook.com/devaughnclark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border-2 border-charcoal/20 flex items-center justify-center hover:bg-charcoal hover:border-charcoal hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://tiktok.com/@devaughnclark" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border-2 border-charcoal/20 flex items-center justify-center hover:bg-charcoal hover:border-charcoal hover:text-white transition-all duration-300"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
            
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
