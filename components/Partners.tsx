'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { name: 'Samsung', logo: '/images/partners/samsung.png' },
    { name: 'ViewSonic', logo: '/images/partners/viewsonic.png' },
    { name: 'Bose', logo: '/images/partners/boselogo.png' },
    { name: 'Logitech', logo: '/images/partners/logitechlogo.png' },
    { name: 'Barco', logo: '/images/partners/barcologo.png' },
    { name: 'Gallo', logo: '/images/partners/gallologopng.png' },
    { name: 'LG', logo: '/images/partners/lglogo.png' },
    { name: 'Epson', logo: '/images/partners/epsonlogo.png' },
    { name: 'Creston', logo: '/images/partners/crestonlogo.png' },
    { name: 'FBT', logo: '/images/partners/fbtlogo-1.png' },
    { name: 'Konftel', logo: '/images/partners/konftel-1.png' },
    { name: 'NEC', logo: '/images/partners/neclogo.png' },
  ];

  const visiblePartners = partners.slice(
    currentIndex,
    currentIndex + 6
  ).concat(
    currentIndex + 6 > partners.length
      ? partners.slice(0, (currentIndex + 6) % partners.length)
      : []
  );

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length);
  };

  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#122942] mb-4">
            ÇÖZÜM ORTAKLARIMIZ
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dünya çapında tanınan markalarla iş birliği yapıyoruz
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="flex-shrink-0 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-[#122942]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center justify-center gap-6 transition-all duration-700 ease-in-out px-8 flex-1">
            {visiblePartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 w-40 h-20 flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 ease-in-out animate-fadeIn"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="flex-shrink-0 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-[#122942]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {partners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-[#122942] w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}
