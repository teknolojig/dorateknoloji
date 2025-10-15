import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Stats from '@/components/Stats';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Stats />
        <WhyUs />
        <Testimonials />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
