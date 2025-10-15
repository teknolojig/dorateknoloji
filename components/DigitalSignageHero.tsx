'use client';

import { Monitor, Tv, Radio, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';
import ContactModal from './ContactModal';

export default function DigitalSignageHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-full bg-gradient-to-br from-[#122942] via-[#1a3a5a] to-[#0f1f33] relative overflow-hidden">
      {/* Grid pattern overlay for modern look */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-12 py-32 lg:py-40">
          {/* Left - Content */}
          <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-6 border border-white/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Yeni Nesil Çözümler</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Digital Signage
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            Digital Signage, dijital tabela olarak da bilinen reklam ve yönlendirme araçlarından bir tanesidir. Digital signage çözümlerimizi inceleyin
          </p>

          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-3 px-8 py-5 bg-white text-[#122942] rounded-xl font-bold hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/20 transform hover:scale-105"
          >
            <span className="text-lg">Teklif Alın</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

          {/* Right - Ultra Modern Visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Main large display */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-6 border border-white/10">
                  <div className="aspect-video bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center relative overflow-hidden">
                    {/* Animated scan line */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-scan"></div>

                    {/* Glowing particles */}
                    <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>

                    {/* Central icon */}
                    <div className="relative z-10">
                      <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center mb-4">
                        <Monitor className="w-12 h-12 text-white" />
                      </div>
                      <div className="flex gap-2 justify-center">
                        <div className="w-20 h-2 bg-white/30 rounded"></div>
                        <div className="w-16 h-2 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating smaller displays - repositioned for better spacing */}
              <div className="absolute -top-12 -right-12 animate-float">
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-4 border border-white/10">
                  <div className="w-32 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Tv className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-12 -left-12 animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-4 border border-white/10">
                  <div className="w-32 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                    <Radio className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Additional floating element */}
              <div className="absolute top-1/2 -right-8 animate-float" style={{ animationDelay: '0.75s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-xl flex items-center justify-center border-2 border-white/20">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
      </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }
      `}</style>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
