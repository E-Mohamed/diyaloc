import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kenaoSansSerif = localFont({
  src: "./fonts/kenao.otf",
  variable: "--font-kenao-sans-serif",
});

const garetFont = localFont({
  src: "./fonts/Garet.otf",
  variable: "--font-garet",
})

export const metadata: Metadata = {
  title: "Diyaloc",
  description: "Votre bien, notre savoir-faire.",
  icons: {
    icon: [
      { url: '/favicons/favicon.ico' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/favicons/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/favicons/android-chrome-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 p-0">
      <body
        className={`${garetFont.variable} ${geistSans.variable} ${geistMono.variable} ${kenaoSansSerif.variable} antialiased m-0 p-0 font-garet`}
      >
        {children}
      </body>
    </html>
  );
}
