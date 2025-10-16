'use client';

import { Sparkles, Maximize, Cloud, Touchpad, Zap, Calendar } from 'lucide-react';
import { useState } from 'react';

export default function DigitalSignageAdvantages() {
  const advantages = [
    {
      icon: Sparkles,
      title: 'Çok Yönlülük',
      description: 'Metin, resim, video, interaktif uygulamalar ve canlı veri akışları gibi çeşitli içerik formatlarını destekleyerek zengin ve dinamik bir görsel deneyim sunar. Her türlü mesajınızı etkili bir şekilde iletmenizi sağlar.',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      icon: Maximize,
      title: 'Ölçeklenebilirlik',
      description: 'Digital signage sistemleri, küçük tek ekranlı kurulumlardan devasa çok ekranlı gösterimlere kadar geniş bir ölçek yelpazesi sunar. Bu, işletmelerin ihtiyaçlarına ve mekanların özelliklerine göre uyum sağlamalarına olanak tanır.',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Cloud,
      title: 'Uzaktan Yönetim',
      description: 'İçeriklerinizi internet bağlantısı üzerinden uzaktan yönetilebilir, bu da işletmenizin farklı lokasyonlarında bulunan çok sayıda ekranı merkezi bir noktadan kolayca kontrol etmenize olanak tanır.',
      gradient: 'from-cyan-500 to-teal-600',
    },
    {
      icon: Touchpad,
      title: 'Etkileşimli Özellikler',
      description: 'Etkileşimli ekranlar, kullanıcıların içerikle doğrudan etkileşime geçmesini sağlar. Bu, özellikle perakende, eğitim ve hizmet sektörlerinde, müşteri deneyimini zenginleştiren ve daha fazla katılım sağlayan bir özelliktir.',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      icon: Zap,
      title: 'Dinamik İçerik Yönetimi',
      description: 'Farklı içerikleri anında düzenleyerek kolayca güncelleyebilir ve bu değişiklikleri anlık olarak hedef kitlenize ulaştırabilirsiniz. Bu esneklik sayesinde, her zaman güncel ve etkili bir iletişim stratejisi sağlayabilirsiniz.',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      icon: Calendar,
      title: 'Zamanlanmış Yayınlar',
      description: 'İçeriklerinizi önceden planlayarak belirli zamanlarda otomatik olarak yayınlayın ve mesajlarınızı hedef kitlenize ulaştırın. Böylece, zamandan tasarruf edip içerik yönetiminde verimliliğinizi artırabilirsiniz.',
      gradient: 'from-red-500 to-pink-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#122942] mb-6">
              Digital Signage&apos;ın Avantajları
            </h2>
            <div className="w-24 h-1 bg-[#122942] mx-auto"></div>
          </div>

          {/* Flipboxes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <FlipBox key={index} advantage={advantage} Icon={Icon} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FlipBox({ advantage, Icon }: { advantage: any; Icon: any }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="flip-box h-64 cursor-pointer perspective"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-box-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front */}
        <div className={`flip-box-front bg-gradient-to-br ${advantage.gradient} rounded-xl shadow-lg flex flex-col items-center justify-center p-8 text-white`}>
          <Icon className="w-16 h-16 mb-4" />
          <h3 className="text-2xl font-bold text-center">{advantage.title}</h3>
        </div>

        {/* Back */}
        <div className="flip-box-back bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-8 border-2 border-gray-100">
          <p className="text-gray-700 text-center leading-relaxed">{advantage.description}</p>
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .flip-box-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-box-inner.flipped {
          transform: rotateY(180deg);
        }
        .flip-box-front,
        .flip-box-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-box-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
