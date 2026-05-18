// lib/config.ts
// Центральный конфиг сайта — замените все значения на свои

import type { SiteConfig } from '@/lib/types';

export const siteConfig: SiteConfig = {
  company: {
    domain: 'https://serybox.ru',
    shortName: 'SERY BOX',
    fullName: 'ООО «SERY BOX»',
    inn: '0000000000',
    kpp: '000000000',
    ogrn: '0000000000000',
    okved: '62.02',
    legalAddress: 'Юридический адрес',
    postalAddress: 'Почтовый адрес',
    generalDirector: 'ФИО (действует на основании Устава)',
  },

  contacts: {
    // Только сырой номер — форматирование через formatPhone() из lib/utils.ts
    phone: '+70000000000',
    email: 'info@serybox.ru',
    telegramUrl: 'https://t.me/your_bot',
    telegramHandle: '@your_bot',
  },

  bank: {
    name: 'Название банка',
    bik: '000000000',
    checkingAccount: '00000000000000000000',
    correspondentAccount: '00000000000000000000',
  },

  // SEO-дефолты — используются в generatePageMetadata()
  meta: {
    // Шаблон заголовка: "Услуги | Название"
    titleTemplate: '%s | SERY BOX',
    defaultDescription: 'Лаборатория красоты SERY BOX',
    // Путь к OG-изображению (1200×630px, положить в /public/og-image.jpg)
    ogImage: '/og-image.jpg',
    // Язык и локаль для OpenGraph
    locale: 'ru_RU',
  },

  // Web App Manifest — используется в app/manifest.ts
  manifest: {
    // Короткое название для иконки на рабочем столе (до 12 символов)
    shortName: 'Название',
    // Основной цвет бренда (адресная строка браузера на мобильных)
    themeColor: '#0B1A2C',
    // Цвет фона splash-экрана при запуске PWA
    backgroundColor: '#ffffff',
  },

  navigation: {
    header: [
      { label: 'Услуги', href: '/services' },
      { label: 'О нас', href: '/about' },
      { label: 'Контакты', href: '/contacts' },
    ],
    footer: [
      { label: 'Услуги', href: '/services' },
      { label: 'О нас', href: '/about' },
      { label: 'Контакты', href: '/contacts' },
      { label: 'Реквизиты', href: '/requisites' },
      { label: 'Согласие на обработку данных', href: '/agreement' },
      { label: 'Политика конфиденциальности', href: '/privacy' },
    ],
    // Маршруты с noIndex: true — исключаются из sitemap автоматически
    noIndex: ['/privacy', '/agreement', '/requisites'],
  },
};
