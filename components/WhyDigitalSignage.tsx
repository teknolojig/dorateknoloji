'use client';

import { Eye, RefreshCw, Users, DollarSign, BarChart, Leaf } from 'lucide-react';

export default function WhyDigitalSignage() {
  const reasons = [
    {
      icon: Eye,
      title: 'Yüksek Dikkat Çekme Yeteneği',
      description:
        'Parlak ekranları, dinamik içerikleri ve görsel çekiciliği ile hedef kitlelerin dikkatini kolayca çeker. Geleneksel statik tabelaların aksine, digital signage görsel olarak daha çarpıcı ve unutulmaz bir izlenim bırakır. Bu, özellikle reklam ve marka bilinirliği oluşturmak için hayati önem taşır.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: RefreshCw,
      title: 'Esnek ve Güncel İçerik Sunumu',
      description:
        'En büyük avantajlarından biri, içeriğin hızla ve kolayca güncellenebilmesidir. Bu özellik, işletmelerin ve kurumların anlık bilgileri, promosyonları veya özel teklifleri hızlı bir şekilde duyurmasına olanak tanır. Örneğin, bir restoran menüsündeki değişiklikleri anında ekranlara yansıtabilir veya bir perakende mağazası güncel indirimleri anında müşterilerine gösterebilir.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'Müşteri Etkileşimi ve Deneyimi',
      description:
        'Digital signage, müşteri etkileşimini artıran interaktif özelliklere sahip olabilir. Dokunmatik ekranlar, QR kodlar ve artırılmış gerçeklik uygulamaları gibi teknolojiler, müşterilerin marka ile etkileşim kurmasını sağlar ve onlara unutulmaz deneyimler sunar. Bu, özellikle perakende ve hizmet sektörlerinde müşteri sadakatini ve memnuniyetini artırır.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: DollarSign,
      title: 'Maliyet Etkinliği ve Çevre Dostu',
      description:
        'Uzun vadede, digital signage çözümleri, geleneksel baskı tabanlı reklam malzemelerine kıyasla daha maliyet etkindir. Tek seferlik baskı ve dağıtım maliyetleri yerine, digital signage sistemleri tekrar tekrar kullanılabilir ve içerikleri dijital olarak güncellenebilir. Ayrıca, kağıt israfını önleyerek daha çevre dostu bir alternatif sunar.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: BarChart,
      title: 'Analitik ve Ölçümleme Yetenekleri',
      description:
        'Gelişmiş digital signage sistemleri, içeriklerin ne kadar etkili olduğunu ölçebilen analitik araçlara sahip olabilir. Bu sayede işletmeler, hangi reklamın veya bilgilendirmenin daha fazla dikkat çektiğini anlayabilir ve pazarlama stratejilerini buna göre ayarlayabilirler.',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="w-full">
      {/* Full width grid with text left, image right */}
      <div className="grid lg:grid-cols-2">
        {/* Left - Content with white background */}
        <div className="bg-white flex items-center">
          <div className="px-8 md:px-12 lg:px-16 py-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#122942] mb-8">
              Neden Digital Signage?
            </h2>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
              Digital signage, modern iş dünyasında ve kamu alanlarında giderek daha fazla yaygınlaşan bir iletişim ve reklam aracıdır. Peki, neden bu kadar popüler? İşte bazı temel sebepler:
            </p>

            {/* Compact reasons list */}
            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${reason.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#122942] mb-2">{reason.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right - Full height Image */}
        <div className="relative min-h-[600px] lg:min-h-[700px]">
          <img
            src="/images/digital-signage/Digital-Signage-Screen.jpg"
            alt="Digital Signage Screen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
