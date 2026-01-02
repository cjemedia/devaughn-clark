'use client';

import { useEffect, useRef, useState } from 'react';

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 lg:py-32 bg-[#1A1A1A]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div 
          className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sage-200 text-xs sm:text-sm font-medium uppercase tracking-[0.25em] mb-4">
            GALLERY
          </p>
          <h2 className="font-cormorant text-white text-4xl lg:text-5xl font-semibold">
            In Action
          </h2>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          
          {/* Row 1 */}
          <div 
            className={`aspect-[4/5] rounded-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <img 
              src="/images/speaking-1.jpg" 
              alt="DeVaughn speaking" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          
          <div 
            className={`aspect-[4/5] rounded-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <img 
              src="/images/speaking-2.jpg" 
              alt="DeVaughn speaking" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          
          <div 
            className={`aspect-[4/5] rounded-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <img 
              src="/images/headshot.jpg" 
              alt="DeVaughn Clark" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          
          {/* Row 2 */}
          <div 
            className={`aspect-[4/5] rounded-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <img 
              src="/images/podcast-1.jpg" 
              alt="DeVaughn at podcast" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          
          <div 
            className={`aspect-[4/5] rounded-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <img 
              src="/images/podcast-2.jpg" 
              alt="DeVaughn interview" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          
          <div 
            className={`aspect-[4/5] rounded-2xl overflow-hidden transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <img 
              src="/images/lifestyle.jpg" 
              alt="DeVaughn lifestyle" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
