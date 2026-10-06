import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/layout/SmoothScroll';
import ProgressBar from '@/components/layout/ProgressBar';
import Navbar from '@/components/layout/Navbar';
import { personalData } from '@/data/content';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontDisplay = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${personalData.website}`),
  title: `${personalData.name} | ${personalData.role}`,
  description: `${personalData.summary} Available to join immediately (0 days notice).`,
  keywords: [
    'Somani Abdulla Surya Teja',
    'Surya Teja',
    'Full Stack Engineer',
    'Applied AI Engineer',
    'LiveKit WebRTC',
    'MongoDB Optimization',
    'Next.js Portfolio',
    'Hyderabad Developer',
  ],
  authors: [{ name: personalData.name, url: `https://${personalData.website}` }],
  creator: personalData.name,
  openGraph: {
    title: `${personalData.name} — ${personalData.role}`,
    description: personalData.summary,
    url: `https://${personalData.website}`,
    siteName: `${personalData.name} Portfolio`,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalData.name} — ${personalData.role}`,
    description: personalData.summary,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personalData.name,
  jobTitle: personalData.role,
  url: `https://${personalData.website}`,
  sameAs: [personalData.linkedin, personalData.github],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'India',
  },
  alumniOf: 'DRK Institute of Science and Technology',
  knowsAbout: [
    'Full Stack Development',
    'Applied AI',
    'Voice AI',
    'LiveKit WebRTC',
    'Node.js',
    'Next.js',
    'MongoDB Optimization',
    'FastAPI',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fontDisplay.variable} dark scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-dark text-light font-sans antialiased relative min-h-screen">
        {/* Subtle 35mm film grain texture */}
        <div className="fixed inset-0 pointer-events-none z-30 grain-overlay opacity-30" />

        <SmoothScroll>
          <ProgressBar />
          <Navbar />
          <main className="relative z-10">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  );
}
