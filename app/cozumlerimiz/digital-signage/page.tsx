import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DigitalSignageHero from '@/components/DigitalSignageHero';
import WhatIsDigitalSignage from '@/components/WhatIsDigitalSignage';
import WhyDigitalSignage from '@/components/WhyDigitalSignage';
import DigitalSignageAdvantages from '@/components/DigitalSignageAdvantages';
import DigitalMenuboard from '@/components/DigitalMenuboard';
import DigitalSignageFAQ from '@/components/DigitalSignageFAQ';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Digital Signage Çözümleri | Dora Teknoloji',
  description: 'Modern dijital tabela ve reklam çözümleri ile işletmenizi güçlendirin. Digital Signage sistemleri ile dinamik içerik yönetimi ve etkili iletişim.',
};

export default function DigitalSignagePage() {
  return (
    <>
      <Header />
      <main>
        <DigitalSignageHero />
        <WhatIsDigitalSignage />
        <WhyDigitalSignage />
        <DigitalSignageAdvantages />
        <DigitalMenuboard />
        <DigitalSignageFAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
