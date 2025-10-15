'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'HAKKIMIZDA', href: '/hakkimizda' },
    {
      label: 'ÇÖZÜMLERİMİZ',
      href: '/cozumlerimiz',
      submenu: [
        { label: 'Digital Signage', href: '/cozumlerimiz/digital-signage' },
        { label: 'Videowall', href: '/cozumlerimiz/videowall' },
        { label: 'Led Ekran', href: '/cozumlerimiz/led-ekran' },
        { label: 'Akıllı Tahta', href: '/cozumlerimiz/akilli-tahta' },
        { label: 'Video Mapping', href: '/cozumlerimiz/video-mapping' },
        { label: 'Video Konferans', href: '/cozumlerimiz/video-konferans' },
        { label: 'Projeksiyon', href: '/cozumlerimiz/projeksiyon' },
        { label: 'İnteraktif Ekranlar', href: '/cozumlerimiz/interaktif-ekranlar' },
        { label: 'Otel TV', href: '/cozumlerimiz/otel-tv' },
        { label: 'Kablosuz Görüntü Aktarıcılar', href: '/cozumlerimiz/kablosuz-goruntu-aktaricilar' },
        { label: 'Profesyonel Ses Sistemi', href: '/cozumlerimiz/profesyonel-ses-sistemi' },
      ],
    },
    { label: 'BLOG', href: '/blog' },
    { label: 'BİZDEN HABERLER', href: '/haberler' },
    { label: 'PROJELER', href: '/projeler' },
    { label: 'REFERANSLARIMIZ', href: '/referanslar' },
    { label: 'İLETİŞİM', href: '/iletisim' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative w-40 h-12">
            <Image
              src={isScrolled ? '/images/dorateknoloji.svg' : '/images/beyazLogoHeader.svg'}
              alt="Dora Teknoloji"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                    isScrolled ? 'text-[#122942] hover:text-[#1a3a5a]' : 'text-white hover:text-gray-200'
                  }`}
                >
                  {item.label}
                  {item.submenu && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    <div className="bg-white shadow-lg rounded-md py-2 min-w-[250px]">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-[#122942] hover:bg-gray-100 hover:text-[#1a3a5a] transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-[#122942]' : 'bg-white'
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-[#122942]' : 'bg-white'
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-colors ${
                  isScrolled ? 'bg-[#122942]' : 'bg-white'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg rounded-md mt-2 mb-4">
            <nav className="py-4">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-[#122942] hover:bg-gray-100 hover:text-[#1a3a5a] transition-colors"
                    onClick={() => !item.submenu && setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 bg-gray-50">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-[#122942] hover:text-[#1a3a5a] transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
