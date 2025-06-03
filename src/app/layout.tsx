import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Aksiomatix | Axel Jorgensen Portfolio',
  description: 'Unreal Developer & Audio Alchemist crafting stylized immersive systems.',
  openGraph: {
    title: 'Aksiomatix | Axel Jorgensen Portfolio',
    description: 'Custom VFX-driven Unreal development & immersive systems.',
    url: 'https://aksiomatix.com',
    siteName: 'Aksiomatix',
    images: [
      {
        url: '/og-image.png', // Place this in public folder
        width: 1200,
        height: 630,
        alt: 'Aksiomatix Logo and Tagline',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aksiomatix | Axel Jorgensen Portfolio',
    description: 'Unreal Developer & Audio Alchemist crafting stylized immersive systems.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
