import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | Music For Pennies',
    default: 'Music For Pennies', 
  },
  description: "Music For Pennies",

  metadataBase: new URL('https://musicforpennies.se'),
  
  openGraph: {
    title: 'Music For Pennies',
    description: "Music For Pennies",
    url: 'https://musicforpennies.se',
    siteName: 'Music For Pennies',
    images: [
      {
        url: 'https://musicforpennies.se/api', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'wwww.musicforpennies.se',
    description: "Music For Pennies",
    images: ['https://musicforpennies.se/api'], // Must be an absolute URL
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
