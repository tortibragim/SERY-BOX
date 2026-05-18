import { Metadata } from 'next';
import { YandexMetrika } from '@/components/analytics/YandexMetrika';
import { siteConfig } from '@/lib/config';
import '../styles/globals.scss';

// TODO: замените на нужный шрифт — https://fonts.google.com
// Verdana — системный шрифт, не требует подключения через next/font

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.company.domain;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: siteConfig.company.shortName,
    template: siteConfig.meta.titleTemplate,
  },
  description: siteConfig.meta.defaultDescription,
  manifest: '/manifest.webmanifest',
  openGraph: {
    siteName: siteConfig.company.shortName,
    locale: siteConfig.meta.locale,
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
};

// JSON-LD: Organization schema
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.company.fullName,
  alternateName: siteConfig.company.shortName,
  url: siteConfig.company.domain,
  logo: `${siteConfig.company.domain}/icon-512.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: siteConfig.contacts.phone,
    contactType: 'customer service',
    availableLanguage: 'Russian',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.company.legalAddress,
    addressCountry: 'RU',
  },
  sameAs: [
    siteConfig.contacts.telegramUrl,
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        {children}
        <YandexMetrika />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
