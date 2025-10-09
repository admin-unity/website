import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'UnityForLife - Building Hope, One Home at a Time',
  description: 'Safe, accessible housing for veterans, elderly, and disabled individuals. Uniting everyone under one roof where dignity, independence, and compassion reign.',
  keywords: 'accessible housing, veteran housing, elderly housing, disability housing, affordable accessible homes, UnityForLife',
  authors: [{ name: 'UnityForLife' }],
  robots: 'index, follow',
  openGraph: {
    title: 'UnityForLife - Building Hope, One Home at a Time',
    description: 'Safe, accessible housing for veterans, elderly, and disabled individuals.',
    type: 'website',
    url: 'https://unityforlife.org',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-50 font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
} 