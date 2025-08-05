import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
      <head>
        <meta name="robots" content="index, follow" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-neutral-900">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
      {process.env.NODE_ENV === 'production' && (
        <>
          <GoogleAnalytics gaId="G-4MLJN88VXV" />
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </html>
  );
}
