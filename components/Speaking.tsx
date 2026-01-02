'use client';

import React from 'react';
import { useEffect, useRef, useState } from 'react';

const keynotes = [
  {
    number: '01',
    title: 'Treat Life Like a Tree',
    subtitle: 'Embracing Growth Through the Seasons',
    description: 'An engaging, story-driven talk on how to embrace the seasons of life that impact work, relationships, mindset and more. The change of seasons will happen — focusing on your growth will equip you with life readiness.',
  },
  {
    number: '02',
    title: 'Are You Grown?',
    subtitle: 'Challenge Where You\'ve Been & Where You\'re Going',
    description: 'DeVaughn shares his personal blueprint for identifying areas of needed growth, and how embracing discomfort is the key to becoming who you\'re meant to be.',
  },
  {
    number: '03',
    title: 'Mid-Game Adjustments',
    subtitle: 'Add, Subtract, Multiply & Divide',
    description: 'A practical lesson on the significance of mistakes. Instead of asking "why me," DeVaughn challenges audiences to identify strategies they can implement to adjust and succeed.',
  },
  {
    number: '04',
    title: 'I Say I Trust GOD, Do I Really?',
    subtitle: 'Building Faith Through Life Lessons',
    description: 'A high-energy keynote on building faith through practical life lessons. Learn how DeVaughn learned to trust GOD from his daughter Noelle and her beautiful innocence.',
  },
];

const whyReasons = [
  { icon: 'heart', title: 'Relatable', description: 'Speaks from experience, not theory' },
  { icon: 'lightning', title: 'Energetic', description: 'Delivery that commands the room' },
  { icon: 'check', title: 'Actionable', description: 'Tools to use, not just inspiration' },
  { icon: 'users', title: 'Engaging', description: 'Interactive moments that spark growth' },
];

const formats = [
  { icon: 'mic', title: 'Keynotes', description: '30, 45, or 60 minutes' },
  { icon: 'users', title: 'Workshops', description: '60-90 minutes, interactive sessions' },
  { icon: 'chat', title: 'Panels & Fireside Chats', description: 'Moderated discussions' },
  { icon: 'video', title: 'Virtual Talks', description: 'Webinars and remote sessions' },
];

const audiences = [
  { emoji: '🎓', title: 'Students & Campus Leaders', description: 'Colleges, universities, high schools' },
  { emoji: '💼', title: 'Corporate Teams', description: 'Employee development, leadership, DEI programs' },
  { emoji: '🏀', title: 'Athletes & Teams', description: 'Mental toughness, mindset, focus' },
  { emoji: '💡', title: 'Faith-Based & Community Groups', description: 'Spiritual growth & life development' },
];

const pastEvents = [
  'Beauty and Brains — "The Growth Strategy"',
  'District 205 3E Expo',
  'Thornwood High School Decision Day',
  'Aligning with Purpose — CJE Media',
];

function Icon({ name, className }: { name: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    heart: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    lightning: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    check: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    users: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    mic: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    chat: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    video: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  };
  return icons[name] || null;
}

export default function Speaking() {
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
    <section id="speaking" ref={sectionRef} className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div 
          className={`max-w-3xl mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-sage-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Speaking
          </p>
          <h2 
            className="font-cormorant text-charcoal font-semibold leading-[1.1] mb-6"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
          >
            Signature Keynotes
          </h2>
          <p className="text-gray text-lg lg:text-xl">
            Transformative talks designed to challenge perspectives and inspire lasting change.
          </p>
        </div>
        
        {/* Keynote Cards - Staggered Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-24 lg:mb-32">
          {keynotes.map((keynote, index) => (
            <div
              key={keynote.number}
              className={`group bg-cream rounded-2xl lg:rounded-3xl p-8 lg:p-10 hover:bg-sage-100 transition-all duration-500 ${
                index % 2 === 1 ? 'md:mt-12' : ''
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <span className="inline-block font-cormorant text-5xl lg:text-6xl font-semibold text-sage-300 mb-4 lg:mb-6">
                {keynote.number}
              </span>
              <h3 className="font-cormorant text-2xl lg:text-3xl font-semibold text-charcoal mb-2">
                {keynote.title}
              </h3>
              <p className="text-sage-500 text-xs lg:text-sm font-semibold uppercase tracking-wider mb-4">
                {keynote.subtitle}
              </p>
              <p className="text-gray leading-relaxed">
                {keynote.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Why Audiences Remember - Dark Section */}
        <div 
          className={`bg-charcoal rounded-2xl lg:rounded-[2rem] p-8 md:p-12 lg:p-16 text-white mb-24 lg:mb-32 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
            <h3 
              className="font-cormorant font-semibold mb-4"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
            >
              Why Audiences Remember DeVaughn
            </h3>
            <p className="text-white/60 text-base lg:text-lg">
              It's not just what he says — it's how he makes you feel.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {whyReasons.map((reason) => (
              <div key={reason.title} className="text-center">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-sage-500/20 flex items-center justify-center mx-auto mb-5">
                  <Icon name={reason.icon} className="w-7 h-7 lg:w-8 lg:h-8 text-sage-200" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{reason.title}</h4>
                <p className="text-white/60 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Formats & Audiences */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Formats */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <h3 className="font-cormorant text-2xl lg:text-3xl font-semibold text-charcoal mb-8">
              Speaking Formats
            </h3>
            <div className="space-y-5">
              {formats.map((format, index) => (
                <div 
                  key={format.title} 
                  className={`flex items-start gap-4 pb-5 ${
                    index < formats.length - 1 ? 'border-b border-sage-200' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <Icon name={format.icon} className="w-5 h-5 text-sage-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">{format.title}</h4>
                    <p className="text-gray text-sm">{format.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Audiences */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <h3 className="font-cormorant text-2xl lg:text-3xl font-semibold text-charcoal mb-8">
              Who He Speaks To
            </h3>
            <div className="space-y-5">
              {audiences.map((audience, index) => (
                <div 
                  key={audience.title} 
                  className={`flex items-start gap-4 pb-5 ${
                    index < audiences.length - 1 ? 'border-b border-sage-200' : ''
                  }`}
                >
                  <span className="text-3xl flex-shrink-0">{audience.emoji}</span>
                  <div>
                    <h4 className="font-semibold text-charcoal mb-1">{audience.title}</h4>
                    <p className="text-gray text-sm">{audience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
        {/* Past Engagements */}
        <div 
          className={`mt-20 lg:mt-28 pt-16 border-t border-sage-200 text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1200ms' }}
        >
          <p className="text-sage-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-8">
            Past Engagements
          </p>
          <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
            {pastEvents.map((event) => (
              <span 
                key={event} 
                className="px-5 lg:px-6 py-3 bg-cream rounded-full text-sm font-medium text-charcoal"
              >
                {event}
              </span>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
