import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { LanguageProvider } from "@/contexts/LanguageContext";
import { site } from "@/constants/site";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: site.seo.title,
    template: site.seo.titleTemplate,
  },
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  authors: [{ name: site.owner }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: site.name,
    description: site.seo.openGraphDescription,
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.seo.twitterDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} font-sans antialiased`}
    >
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
