import './globals.css';
import type { Metadata } from 'next';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  title: 'KalaKriti Online - Handmade Art & Crafts',
  description: 'Discover unique handmade paintings, pottery, jewelry, and crafts from independent artists. Each piece tells a story.',
  keywords: 'handmade art, crafts, paintings, pottery, jewelry, independent artist',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-body antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}