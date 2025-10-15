'use client';

export default function WhatIsDigitalSignage() {
  return (
    <section id="nedir" className="w-full">
      {/* Full width grid with image left, text right */}
      <div className="grid lg:grid-cols-2">
        {/* Left - Full height Image */}
        <div className="relative min-h-[600px] lg:min-h-[700px]">
          <img
            src="/images/digital-signage/Digital-Signage-Nedir.png"
            alt="Digital Signage Nedir"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Content with padding */}
        <div className="bg-gray-50 flex items-center">
          <div className="px-8 md:px-12 lg:px-16 py-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#122942] mb-8">
              Digital Signage Nedir?
            </h2>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Digital Signage, dijital tabela olarak da bilinen reklam ve yönlendirme araçlarından bir tanesi olarak kabul edilmektedir. Amacı reklam olan içeriklerin tüketici ile buluşturulması olan bu çözüm, kapalı bir yayın devre sistemi sağlar. Fotoğraf ya da video içerikli dosyaların bir merkezden yönetilmesini amaçlayan bu çözümde bilgisayar ağı ile farklı noktalarda bulunan ekranlara görüntü aktarılmaktadır. Bilgisayar ve medya oynatıcısının değerli olduğu bu sistemde tüketici üzerinde etki bırakmak daima değerlidir.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-semibold">
              <span className="font-bold text-[#122942]">Digital Signage,</span> günümüzde işletmelerin ve kamu alanlarının vazgeçilmez bir parçası haline gelen, dinamik ve dijital içerikleri gösteren elektronik gösterge sistemleridir. Fiziksel tabelaların aksine, digital signage çözümleri, ekranda gösterilen içeriği kolayca güncelleyebilme ve dinamik, etkileşimli içerik sunabilme avantajlarına sahiptir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
