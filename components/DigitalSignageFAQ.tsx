'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function DigitalSignageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Digital Signage nedir?',
      answer:
        'Digital Signage, dijital ekranlar aracılığıyla görsel içeriklerin (metin, video, grafikler) dinamik olarak görüntülenmesini sağlayan bir iletişim ve reklam aracıdır. Genellikle mağazalarda, ofislerde, kamu alanlarında ve diğer birçok yerde kullanılır.',
    },
    {
      question: 'Digital Signage sistemini nasıl yönetebilirim?',
      answer:
        'Digital Signage sisteminizi internet üzerinden uzaktan yönetebilirsiniz. Bu sayede içeriklerinizi herhangi bir yerden yükleyebilir, güncelleyebilir ve zamanlayabilirsiniz.',
    },
    {
      question: 'Hangi içerik formatları desteklenir?',
      answer:
        'Digital Signage, metin, resim, video, interaktif uygulamalar ve canlı veri akışları gibi çeşitli içerik formatlarını destekler. Bu sayede zengin ve çeşitli bir görsel deneyim sunabilirsiniz.',
    },
    {
      question: 'Digital Signage için donanım gereksinimleri nelerdir?',
      answer:
        'Digital Signage için genellikle bir ekran (LCD, LED vb.), bir medya oynatıcı veya entegre bir sistem ve internet bağlantısı gereklidir. Kullanacağınız ekranın büyüklüğü ve çözünürlüğü, ihtiyaçlarınıza göre belirlenir.',
    },
    {
      question: 'Birden fazla ekranı aynı anda yönetebilir miyim?',
      answer:
        'Evet, Digital Signage sistemleri birden fazla ekranı aynı anda yönetmenize olanak tanır. Merkezi bir kontrol noktası sayesinde tüm ekranlarınıza eş zamanlı olarak içerik gönderebilir ve güncelleyebilirsiniz.',
    },
    {
      question: 'İçeriklerin yayınlanma zamanını önceden belirleyebilir miyim?',
      answer:
        'Evet, içeriklerinizi önceden planlayarak belirli zamanlarda otomatik olarak yayınlayabilirsiniz. Bu özellik, mesajlarınızın doğru zamanda doğru kitleye ulaşmasını sağlar.',
    },
    {
      question: 'Digital Signage\'ın avantajları nelerdir?',
      answer:
        'Digital Signage, esnek ve dinamik içerik yönetimi sağlar. İçeriklerinizi hızlıca güncelleyebilir, geniş bir kitleye etkili mesajlar ileterek marka bilinirliğinizi artırabilirsiniz. Ayrıca, operasyonel verimliliğinizi de yükseltir.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#122942] mb-6">
              Sıkça Sorulan Sorular
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Digital Signage hakkında sıkça sorulan soruları ve yanıtlarını aşağıda bulabilirsiniz; bu bilgiler, sistemin nasıl çalıştığını ve işletmeniz için hangi avantajları sunduğunu daha iyi anlamanıza yardımcı olacaktır.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#122942] text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
