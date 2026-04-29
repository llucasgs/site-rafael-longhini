import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Longhini Desenvolvimento Industrial | Soluções Industriais",
    template: "%s | Longhini Desenvolvimento Industrial",
  },
  description:
    "Projetos mecânicos, desenvolvimento de novos produtos, engenharia reversa, prototipagem 3D, automação industrial e soluções industriais personalizadas.",
  keywords: [
    "Longhini Desenvolvimento Industrial",
    "Rafael Longhini Lopes",
    "desenvolvimento industrial",
    "projetos mecânicos",
    "engenharia reversa",
    "prototipagem 3D",
    "automação industrial",
    "SolidWorks",
    "AutoCAD",
    "CAD CAM",
    "máquinas especiais",
    "moldes plásticos",
    "ferramentaria",
  ],
  authors: [{ name: "Rafael Longhini Lopes" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Longhini Desenvolvimento Industrial",
    description:
      "Transformando ideias em produtos reais, eficientes e inovadores com engenharia, tecnologia e experiência industrial.",
    type: "website",
    locale: "pt_BR",
    siteName: "Longhini Desenvolvimento Industrial",
  },
  twitter: {
    card: "summary_large_image",
    title: "Longhini Desenvolvimento Industrial",
    description:
      "Projetos mecânicos, engenharia reversa, prototipagem 3D e soluções industriais personalizadas.",
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
      <body>{children}</body>
    </html>
  );
}
