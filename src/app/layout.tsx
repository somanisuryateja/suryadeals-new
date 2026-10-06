import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Somani Abdulla Surya Teja | Full Stack Systems & Applied AI Engineer',
  description: 'Portfolio of Somani Abdulla Surya Teja — Senior Full Stack & Applied AI Engineer. Officially Relieved Sep 2026, 0-day notice period. Architected 156+ microservices, 40ms MongoDB optimization, and sub-650ms WebRTC pipelines.',
  openGraph: {
    title: 'Somani Abdulla Surya Teja | Full Stack Systems Engineer',
    description: '1.9+ Years High-Scale Production Engineering at Codegnan. 0-day notice period immediate joiner.',
    url: 'https://suryadeals.com',
    siteName: 'Surya Teja Portfolio',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#090A0F] text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
