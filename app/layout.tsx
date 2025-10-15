import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dora Teknoloji | Profesyonel Görüntü ve Ses Sistemleri",
  description: "20 yıllık sektör deneyimi ile yerel ve global birçok projenin çözüm ortaklığını yürütmekte olan Dora Teknoloji ile tüm görüntü ve ses teknolojilerine yönelik çözümlere ulaşın.",
  keywords: ["Digital Signage", "Videowall", "LED Ekran", "Akıllı Tahta", "Video Mapping", "Video Konferans", "Projeksiyon", "İnteraktif Ekranlar", "Otel TV", "Profesyonel Ses Sistemi"],
  authors: [{ name: "Dora Teknoloji" }],
  creator: "Dora Teknoloji",
  publisher: "Dora Teknoloji",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://dorateknoloji.com",
    siteName: "Dora Teknoloji",
    title: "Dora Teknoloji | Profesyonel Görüntü ve Ses Sistemleri",
    description: "20 yıllık sektör deneyimi ile profesyonel görüntü ve ses sistemleri çözümleri",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dora Teknoloji | Profesyonel Görüntü ve Ses Sistemleri",
    description: "20 yıllık sektör deneyimi ile profesyonel görüntü ve ses sistemleri çözümleri",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
