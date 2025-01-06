import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "400", "600", "900"],
  subsets: ["latin"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
export const metadata: Metadata = {
  title: "Soundz by Freddy.dev | Music Tech Platform",
  description:
    "Explore Soundz, a cutting-edge platform by Freddy.dev, dedicated to revolutionizing music technology and enhancing your audio experience.",
  icons: {
    icon: ["/logot.png?v=4"],
    shortcut: ["/logot.png"],
    apple: ["/logot.png"],
  },
  openGraph: {
    title: "Soundz by Freddy.dev | Music Tech Platform",
    description:
      "Discover Soundz by Freddy.dev, the ultimate music tech platform delivering innovation and seamless audio solutions.",
    url: "https://soundz-five.vercel.app",
    siteName: "Soundz by Freddy.dev",
    images: [
      {
        url: "/imgaes/william.png", // (recommended dimensions: 1200x630)
        width: 1200,
        height: 630,
        alt: "Soundz by Freddy.dev Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Optimized card type for Twitter
    title: "Soundz by Freddy.dev | Music Tech Platform",
    description:
      "Revolutionizing music technology with Soundz, your go-to platform for modern audio innovation.",
    images: ["/images/william.png"], // Ensure this matches the Open Graph image
  },
  viewport: "width=device-width, initial-scale=1", // Essential for responsive design
  themeColor: "#000000", // Sets the browser theme color for mobile
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
