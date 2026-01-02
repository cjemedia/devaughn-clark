'use client';

import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission - replace with actual form handling
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left - Info */}
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <p className="text-sage-500 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Contact
            </p>
            <h2 
              className="font-cormorant text-charcoal font-semibold leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}
            >
              Let's Create<br />Something Powerful
            </h2>
            <p className="text-gray text-lg mb-10 lg:mb-12 max-w-md">
              Ready to inspire growth at your next event? Let's talk about how 
              DeVaughn can make an impact.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-5">
              <a 
                href="mailto:info@inspiration-above.com" 
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-charcoal text-white flex items-center justify-center group-hover:bg-sage-500 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray">Email</p>
                  <p className="font-medium text-charcoal group-hover:text-sage-500 transition-colors">info@inspiration-above.com</p>
                </div>
              </a>
              
              <a 
                href="tel:7737247826" 
                className="flex items-center gap-4 group"
              >
                <div className="w-14 h-14 rounded-full bg-charcoal text-white flex items-center justify-center group-hover:bg-sage-500 transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray">Phone</p>
                  <p className="font-medium text-charcoal group-hover:text-sage-500 transition-colors">(773) 724-7826</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-charcoal text-white flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray">Location</p>
                  <p className="font-medium text-charcoal">Chicago, IL</p>
                </div>
              </div>
            </div>
            
            {/* Social */}
            <div className="mt-10 lg:mt-12 pt-10 lg:pt-12 border-t border-sage-200">
              <p className="text-sm text-gray font-medium mb-4">Connect on social</p>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com/devaughnnclark" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-sage-500 transition-colors duration-300"
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
                  className="w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-sage-500 transition-colors duration-300"
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
                  className="w-12 h-12 rounded-full bg-charcoal text-white flex items-center justify-center hover:bg-sage-500 transition-colors duration-300"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right - Form */}
          <div 
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10 shadow-sm">
              <h3 className="font-cormorant text-2xl font-semibold text-charcoal mb-8">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Name <span className="text-sage-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your name"
                      className="w-full px-5 py-4 rounded-xl border-2 border-sage-200/60 bg-off-white text-charcoal placeholder:text-gray/50 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Email <span className="text-sage-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      required
                      placeholder="your@email.com"
                      className="w-full px-5 py-4 rounded-xl border-2 border-sage-200/60 bg-off-white text-charcoal placeholder:text-gray/50 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Organization
                  </label>
                  <input 
                    type="text"
                    placeholder="Company or organization"
                    className="w-full px-5 py-4 rounded-xl border-2 border-sage-200/60 bg-off-white text-charcoal placeholder:text-gray/50 transition-all duration-300"
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Event Type <span className="text-sage-500">*</span>
                    </label>
                    <select 
                      required
                      className="w-full px-5 py-4 rounded-xl border-2 border-sage-200/60 bg-off-white text-charcoal transition-all duration-300 appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B6B6B'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
                    >
                      <option value="">Select type</option>
                      <option value="keynote">Keynote Speech</option>
                      <option value="workshop">Workshop</option>
                      <option value="panel">Panel / Fireside Chat</option>
                      <option value="virtual">Virtual Talk</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal mb-2">
                      Event Date
                    </label>
                    <input 
                      type="date"
                      className="w-full px-5 py-4 rounded-xl border-2 border-sage-200/60 bg-off-white text-charcoal transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Message <span className="text-sage-500">*</span>
                  </label>
                  <textarea 
                    rows={5}
                    required
                    placeholder="Tell us about your event, audience, and vision..."
                    className="w-full px-5 py-4 rounded-xl border-2 border-sage-200/60 bg-off-white text-charcoal placeholder:text-gray/50 transition-all duration-300 resize-none"
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full font-medium py-4 rounded-full transition-all duration-300 ${
                    formStatus === 'success' 
                      ? 'bg-sage-500 text-white' 
                      : 'bg-charcoal text-white hover:bg-sage-500'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {formStatus === 'submitting' && 'Sending...'}
                  {formStatus === 'success' && '✓ Message Sent!'}
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'error' && 'Try Again'}
                </button>
              </form>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
