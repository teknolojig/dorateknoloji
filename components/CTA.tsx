export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#122942] to-[#1a3a5a] relative overflow-hidden">
      {/* Background Pattern */}
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            DANIŞMANLIĞA MI İHTİYACINIZ VAR?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            Uzman ekibimiz projeleriniz için size en uygun çözümleri sunmaya hazır.
            Ücretsiz keşif ve danışmanlık hizmeti için hemen iletişime geçin.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/iletisim"
              className="inline-block bg-white text-[#122942] px-10 py-4 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg transform hover:scale-105 duration-300"
            >
              Hemen İletişime Geçin
            </a>
            <a
              href="tel:+902167555049"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-10 py-4 rounded-md font-medium text-lg hover:bg-white hover:text-[#122942] transition-colors transform hover:scale-105 duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Bizi Arayın
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-8 text-white text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Ücretsiz Keşif
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Hızlı Dönüş
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Profesyonel Destek
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
