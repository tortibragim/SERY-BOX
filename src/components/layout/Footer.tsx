import React from 'react';
import { IconPhone, IconMail, IconBrandTelegram } from '@tabler/icons-react';
import Logo from '@/components/ui/Logo';
import { siteConfig } from '@/lib/config';
import { formatPhone } from '@/lib/utils';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-[3rem] md:pb-4">
      <div className="container">
        <div className="bg-primary text-white md:p-8 p-4 rounded-[.75rem] md:rounded-[1.5rem]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-4 md:pb-10 pb-8">

            {/* Company Info */}
            <div>
              <a href="/" className="uppercase flex flex-col text-xs text-white tracking-wider mb-8 gap-[4px]">
                <Logo width={100} height={30} className="text-white" />
                {siteConfig.company.shortName}
              </a>
              <p className="text-gray-400 text-xs leading-relaxed">
                {/* TODO: краткое описание компании */}
                Краткое описание вашей компании или услуг.
              </p>
            </div>

            {/* Legal Info */}
            <div>
              <h4 className="font-bold uppercase text-xs tracking-wider mb-4">Реквизиты</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                {siteConfig.company.fullName}<br />
                ИНН {siteConfig.company.inn}<br />
                ОГРН {siteConfig.company.ogrn}<br />
                ОКВЭД: {siteConfig.company.okved}
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold uppercase text-xs tracking-wider mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400 text-xs">
                {siteConfig.navigation.footer.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="font-bold uppercase text-xs tracking-wider mb-4">Контакты</h4>
              <ul className="space-y-3 text-gray-400 text-xs">
                <li className="flex items-center gap-2">
                  <IconPhone size={18} strokeWidth={1.5} className="flex-shrink-0" />
                  <a href={`tel:${siteConfig.contacts.phone}`} className="hover:text-white transition-colors">
                    {formatPhone(siteConfig.contacts.phone)}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IconMail size={18} strokeWidth={1.5} className="flex-shrink-0" />
                  <a href={`mailto:${siteConfig.contacts.email}`} className="hover:text-white transition-colors">
                    {siteConfig.contacts.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <IconBrandTelegram size={18} strokeWidth={1.5} className="flex-shrink-0" />
                  <a
                    href={siteConfig.contacts.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {siteConfig.contacts.telegramHandle}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 md:pt-8 pt-4">
            <p className="text-gray-500 text-xs text-center uppercase">
              {currentYear} © {siteConfig.company.shortName} | Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
