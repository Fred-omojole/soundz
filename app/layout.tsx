import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "400", "600", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soundz by Freddy.dev | Music Tech Platform",
  description:
    "Explore Soundz, a cutting-edge platform by Freddy.dev, dedicated to revolutionizing music technology and enhancing your audio experience.",
  icons: {
    icon: ["/logot.png?v=4"],
    shortcut: ["/logot.png"],
  },

  generator: "Next.js",
  colorScheme: "light",
  openGraph: {
    title: "Soundz by Freddy.dev | Music Tech Platform",
    description:
      "Discover Soundz by Freddy.dev, the ultimate music tech platform delivering innovation and seamless audio solutions.",
    url: "https://soundz-five.vercel.app/",
    siteName: "soundz-five.vercel.app",
    images: [
      {
        url: "https://github.com/Fred-omojole/soundz/blob/master/public/images/william.png?raw=true",
        width: 1200,
        height: 630,
        alt: "Soundz by Freddy.dev Open Graph Image",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soundz by Freddy.dev | Music Tech Platform",
    description:
      "Discover Soundz by Freddy.dev, the ultimate music tech platform delivering innovation and seamless audio solutions.",
    creator: "yele — Frontend dev",
    creatorId: "omoyele60762",
    images: [
      "https://github.com/Fred-omojole/soundz/blob/master/public/images/william.png?raw=true",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
