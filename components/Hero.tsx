'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero.jpg" 
          alt="DeVaughn Clark speaking on stage"
          className="w-full h-full object-cover object-[center_15%]"
        />
        {/* Gradient Overlay - more dramatic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/40 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
        
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <p 
            className={`text-sage-200 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] mb-4 lg:mb-6 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            Inspirational Speaker · Chicago
          </p>
          
          {/* Main Headline */}
          <h1 
            className={`font-cormorant text-white font-semibold leading-[0.95] mb-6 lg:mb-8 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              fontSize: 'clamp(2.75rem, 8vw, 6rem)',
              transitionDelay: '400ms' 
            }}
          >
            Inspiring Growth.
            <br />
            <span className="text-sage-200">One Room at a Time.</span>
          </h1>
          
          {/* Subhead */}
          <p 
            className={`text-white/80 text-lg lg:text-xl max-w-xl leading-relaxed mb-8 lg:mb-10 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            High energy. Raw authenticity. Practical wisdom that helps 
            audiences grow in every area of life.
          </p>
          
          {/* CTAs */}
          <div 
            className={`flex flex-wrap gap-4 transition-all duration-700 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-3 bg-white text-charcoal px-7 py-4 rounded-full font-medium hover:bg-cream transition-all duration-300"
            >
              Book for Your Event
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#speaking" 
              className="inline-flex items-center gap-3 text-white border border-white/40 px-7 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300"
            >
              View Keynotes
            </a>
          </div>
          
        </div>
        
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1200ms' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
        </div>
      </div>
      
    </section>
  );
}
