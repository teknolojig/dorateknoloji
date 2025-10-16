'use client';

import { useEffect, useRef, useState } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const stats = [
    { value: 500, suffix: '+', label: 'Aktif Müşteri' },
    { value: 10000, suffix: '+', label: 'Aktif Ekran' },
    { value: 15, suffix: '+', label: 'Ülke' },
    { value: 98, suffix: '%', label: 'Müşteri Memnuniyeti' },
  ];

  const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const stepValue = end / steps;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCount(Math.min(Math.floor(stepValue * currentStep), end));
        } else {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }, [isVisible, end]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-white">
        {count.toLocaleString('tr-TR')}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#0a1929] via-[#122942] to-[#1a3a5a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            RAKAMLARLA DORA TEKNOLOJİ
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Sektördeki başarımızı rakamlarla kanıtlıyoruz
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animation: `scaleIn 0.6s ease-out ${index * 0.15}s backwards`
              }}
            >
              {/* Card Background */}
              <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:transform hover:scale-105 hover:shadow-2xl">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative text-center">
                  {/* Counter */}
                  <div className="mb-2">
                    <Counter end={stat.value} suffix={stat.suffix} />
                  </div>

                  {/* Label */}
                  <p className="text-gray-300 text-sm md:text-base font-medium">
                    {stat.label}
                  </p>

                  {/* Animated Icon/Decoration */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}
