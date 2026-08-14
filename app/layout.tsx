import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STRIKER Soluções Digitais | Sites que posicionam",
  description:
    "Sites estratégicos para valorizar sua empresa, fortalecer autoridade e transformar visitantes em oportunidades comerciais.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "STRIKER Soluções Digitais",
    description:
      "Sites que posicionam. Experiências que convertem.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "STRIKER Soluções Digitais",
    description:
      "Sites estratégicos para empresas e prestadores de serviço.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Striker Soluções Digitais",
  email: "rafael.gomeslago1@gmail.com",
  areaServed: "Brasil",
  founder: {
    "@type": "Person",
    name: "Rafael Gomes Lago",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    telephone: "+55 54 99910-2656",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
