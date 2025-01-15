import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./navbar/NavBar";
import Footer from "./navbar/Footer";
import Providers from "./components/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "OneMart - Quality Construction Materials Online",
  description:
    "OneMart offers a wide range of construction materials for all your building needs. Browse our products and make your purchase online today.",
  openGraph: {
    title: "OneMart - Quality Construction Materials Online",
    description:
      "OneMart offers a wide range of construction materials for all your building needs. Browse our products and make your purchase online today.",
    url: "https://www.onemart.com",
    siteName: "OneMart",
    images: [
      {
        url: "https://www.onemart.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OneMart - Quality Construction Materials",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OneMart - Quality Construction Materials Online",
    description:
      "OneMart offers a wide range of construction materials for all your building needs. Browse our products and make your purchase online today.",
    images: ["https://www.onemart.com/twitter-image.jpg"],
    creator: "@OneMart",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};
export const generateViewport = () => "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div>
            <NavBar />
            <main>{children}</main>
            <Footer />
          </div>
        </body>
      </html>
    </Providers>
  );
}
