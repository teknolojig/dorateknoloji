'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Gözde Tuzcu',
      company: 'ANT Group',
      position: 'Yönetici',
      text: 'Kurucusunun sektördeki tecrübe ve birikimleri Dora Teknoloji ile güvenle proje geliştirmemizi sağladı. Çözüm odaklı ve yenilikçi yaklaşımları yanında satış sonrasında aklımıza takılan her konuda desteklerini esirgemeyen Dora Teknoloji\'nin uzun yıllar tedarikçimiz olması konusunda inancımız tamdır.',
      logo: '/images/testimonials/antlogo.png',
      rating: 5
    },
    {
      name: 'İzzet Sucu',
      company: 'Galata Üniversitesi',
      position: 'Bilgi İşlem Daire Başkanı',
      text: 'Dora Teknoloji ile farklı ürün ihtiyaçları ile başlayan iş ilişkimiz yerinde keşif ve bizlere ücretsiz demo sağlanarak satın almak istediğimiz ürünlerin deneyimimize sunulmasıyla devam etti. Kendileri hibrit eğitim modeli kapsamında; 4 fakülte, 1 meslek yüksek okulu olmak üzere toplam 21 bölümde eğitim veren okulumuzda öğrencilerimize akıllı tahta ve grafik tabletlerle son derece teknolojik bir ortam sağlamamıza aracılık etti. Hızlı aksiyon alabilen dinamik yapılarıyla sorunsuz bir proje geliştirdik.',
      logo: '/images/testimonials/galatalogo.png',
      rating: 5
    },
    {
      name: 'Barış Umut',
      company: 'Eren Holding',
      position: 'Proje ve Sistem Yöneticisi',
      text: 'Dora Teknoloji ile beraber Eren Holding iştiraki olarak kapılarını 2023 yılında açan Bitlis Özel Eren Fen ve Teknoloji Lisesi sınıflarında akıllı tahta projesi gerçekleştirdik. Dora Teknoloji; hızlı tedarik süreci, uzman teknik kadrosu ve çözümcül yaklaşımıyla bölge çocuklarına dünya standartlarında bir eğitim ortamı sunmamızda aracı olmuştur.',
      logo: '/images/testimonials/eren_holding_logo.jpg',
      rating: 5
    },
    {
      name: 'Aydın Özbilen',
      company: 'Koruma',
      position: 'Bilgi Sistemleri Müdürü',
      text: 'Kimya, tarım, temizlik, lojistik sektörlerinde faaliyet gösteren firmamızın GEBKİM – Kocaeli Gebze V (Kimya) İhtisas Organize Sanayi Bölgesi\'ndeki eğitim salonlarında Dora Teknoloji ile led ekran, video konferans ve ses sistemleri alanında çalışmalar gerçekleştirdik. Gerekli ürünlerin tespitinden tedariğine, montajından sonraki süreçteki desteklerine kadar büyük bir titizlik içinde, uzman bir ekiple firmamıza hizmet verdiler.',
      logo: '/images/testimonials/korumaklor.webp',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 2) % testimonials.length;
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const visibleTestimonials = [
    testimonials[currentIndex % testimonials.length],
    testimonials[(currentIndex + 1) % testimonials.length]
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0a1929] via-[#122942] to-[#1a3a5a] overflow-hidden">
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            MÜŞTERİ DENEYİMLERİ
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Müşterilerimizin bizim hakkımızda söyledikleri
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ease-in-out">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 relative transition-all duration-700 ease-in-out hover:shadow-xl hover:bg-white/15 border border-white/20 animate-fadeIn"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-white opacity-10">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-white text-base leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-300">
                        {testimonial.position}
                      </p>
                      <p className="text-sm text-blue-300 font-medium mt-1">
                        {testimonial.company}
                      </p>
                    </div>
                    <div className="relative w-20 h-20 flex-shrink-0 bg-white rounded-lg p-2">
                      <Image
                        src={testimonial.logo}
                        alt={testimonial.company}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * 2)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex / 2 ? 'bg-white w-8' : 'bg-white/30 w-2'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.7s ease-in-out;
        }
      `}</style>
    </section>
  );
}
