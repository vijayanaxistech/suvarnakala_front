import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="min-h-screen px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
