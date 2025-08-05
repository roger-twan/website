import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-neutral-900">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
      {process.env.NODE_ENV === 'production' && (
        <GoogleAnalytics gaId="G-4MLJN88VXV" />
      )}
    </html>
  );
}
