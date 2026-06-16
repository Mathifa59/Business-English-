import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Business English Academy — Inglés para profesionales en Lima',
    template: '%s | Business English Academy',
  },
  description:
    'Aprende Business English con docentes nativos certificados. Metodología acelerada, clases online y presenciales, certificación internacional. Lima, Perú.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
