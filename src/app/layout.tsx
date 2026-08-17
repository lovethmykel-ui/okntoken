import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://okntoken.com"),
  title: "OKN Token | Powering the OKNexus Ecosystem",
  description:
    "OKN Token powers a secure, transparent, and AI-powered ecosystem built for the next generation of digital finance. Built on BNB Smart Chain.",
  keywords: [
    "OKN Token",
    "$OKN",
    "OKNexus",
    "BNB Smart Chain",
    "BSC",
    "Web3",
    "AI Blockchain",
    "Crypto Presale",
    "Layer 1",
  ],
  authors: [{ name: "OKNexus Ecosystem" }],
  openGraph: {
    title: "OKN Token | Powering the OKNexus Ecosystem",
    description:
      "OKN Token powers a secure, transparent, and AI-powered ecosystem built for the next generation of digital finance.",
    url: "https://okntoken.com",
    siteName: "OKN Token",
    images: [
      {
        url: "/brand/OKN_coin_transparent_padded.png",
        width: 961,
        height: 1009,
        alt: "OKN Token 3D Coin",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OKN Token | Powering the OKNexus Ecosystem",
    description:
      "OKN Token powers a secure, transparent, and AI-powered ecosystem built for the next generation of digital finance.",
    creator: "@OkNexusExchange",
    images: ["/brand/OKN_coin_transparent_padded.png"],
  },
  icons: {
    icon: "/brand/OKN_logo_mark_transparent.png",
    apple: "/brand/OKN_logo_mark_transparent.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/brand/OKN_logo_mark_transparent.png" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('okn-theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-[#F8F9FE] dark:bg-[#050506] text-slate-900 dark:text-slate-100 font-sans antialiased selection:bg-purple-500/20 selection:text-purple-900 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
