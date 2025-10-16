'use client';

import { Utensils, ImageIcon, Clock, TrendingUp, Smartphone, Shield } from 'lucide-react';
import Image from 'next/image';

export default function DigitalMenuboard() {
  const features = [
    {
      icon: Utensils,
      title: 'Görsel Zenginlik',
      description: 'Yemeklerinizi HD kalitede görseller ve videolarla tanıtın, iştah açıcı sunumlar oluşturun.',
    },
    {
      icon: Clock,
      title: 'Anında Güncelleme',
      description: 'Fiyatları ve menü içeriklerini dakikalar içinde güncelleyin, kampanyaları hızla yayına alın.',
    },
    {
      icon: TrendingUp,
      title: 'Satış Artışı',
      description: 'Dinamik içerikler ve çekici görseller ile ortalama sepet tutarını %20-30 artırın.',
    },
    {
      icon: Smartphone,
      title: 'Mobil Entegrasyon',
      description: 'QR kod ile dijital menü, sipariş sistemi ve mobil ödeme entegrasyonları.',
    },
    {
      icon: ImageIcon,
      title: 'Günün Önerileri',
      description: 'Özel kampanyaları, sezonluk menüleri ve chef önerilerini öne çıkarın.',
    },
    {
      icon: Shield,
      title: 'Hijyenik Çözüm',
      description: 'Dokunmatik menülere alternatif olarak temassız, hijyenik bir deneyim sunun.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#122942] mb-6">
              Digital Menuboard
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Digital Menuboard, restoranlar, kafeler, fast food zincirleri ve diğer yeme-içme işletmeleri için modern bir çözüm sunar. Geleneksel kağıt menülerin yerini alarak, Digital Menuboard, görsel açıdan zengin ve dinamik bir menü sunma imkanı sağlar.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left - Image/Visual */}
            <div className="relative">
              <div className="relative h-96 rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/images/digital-signage/Digital-Menuboard.webp"
                  alt="Digital Menuboard"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-400 rounded-full blur-2xl opacity-50"></div>
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Bu teknolojik yenilik, işletmelere bir dizi avantaj sunar. Öncelikle, müşterilere yemek seçeneklerini çekici bir şekilde sunar. Yüksek çözünürlüklü ekranlar sayesinde, yemekler ve içecekler canlı renklerle ve çekici görsellerle sergilenir.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Digital Menuboard&apos;un esnekliği de dikkat çekicidir. İçerik anında güncellenebilir ve özel teklifler, günlük öğünler veya mevsimsel menüler kolayca eklenip kaldırılabilir. Bu, işletmelerin taleplere hızla yanıt vermesini sağlar ve müşterilere güncel bilgiler sunar.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Ayrıca, Digital Menuboard, işletmelerin operasyonel verimliliğini artırır. Fiyatlar otomatik olarak güncellenebilir ve bu da fiyat değişikliklerini kolayca yönetmeyi sağlar. Ayrıca, kağıt kullanımını azaltarak çevresel etkiyi azaltır.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-[#122942] mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
