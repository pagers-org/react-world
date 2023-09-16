import './globals.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { MSWProvider } from '@/mocks/MSWProvider';

export const metadata: Metadata = {
  title: 'react world',
  description: 'hello react world',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <MSWProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="container">
              <Navbar />
              {children}
            </div>
          </ThemeProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
