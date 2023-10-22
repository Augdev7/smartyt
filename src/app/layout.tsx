import { siteConfig } from '@/config';

import Header from "@/components/Header";
import "./css/globals.css";
import type { Metadata } from "next";
import Layout from "@/components/Layout";
import "slick-carousel/slick/slick.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: '%s | AGÊNCIA UP.EXPERT',
    default: 'Agência full service, Gestão de Redes Sociais, SEO (Search Engine Optimization), Publicidade Online, Marketing de Conteúdo e Design Gráfico e Desenvolvimento Web.'
  },
  description: 'AGÊNCIA DE MARKETIGN DIGITAL EM BRASILIA | é uma empresa especializada em promover produtos, serviços e marcas na era digital. Seu principal objetivo é utilizar estratégias online para aumentar a visibilidade, o alcance e o engajamento de seus clientes, proporcionando resultados mensuráveis. Aqui está uma descrição mais detalhada para uma agência de marketing digital:',
  verification: {
    google: 'google-site-verification=8v6zEqQQOckBK2wYrk8fyfM9Fy848TFIm9Bcd_ntqtk'
  },
  manifest: '/manifest.json',
  authors: [{ name: 'AGÊNCIA UP.EXPERT' }],
  metadataBase: new URL(`${siteConfig.url}`),
  openGraph: {
    type: 'website',
    url: `${siteConfig.url}/cover.jpg`,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: 'UP.EXPERT',
    images: [
      {
        url: `${siteConfig.url}/cover.jpg`
      }
    ]
  },
  robots: 'index, follow',
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/cover.jpg`]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
        <Layout>
          <Header />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
