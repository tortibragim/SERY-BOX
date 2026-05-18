import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/config';
import { formatPhone } from '@/lib/utils';

export const metadata = generatePageMetadata({
  title: 'Реквизиты',
  canonicalPath: '/requisites',
});

export default function RequisitesPage() {
  const { company, bank, contacts } = siteConfig;

  return (
    <div className="pt-16">
      <div className="container py-16 max-w-2xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Реквизиты</h1>

        <div className="space-y-6 text-sm">
          <section>
            <h2 className="font-bold uppercase tracking-wider mb-2">Компания</h2>
            <p>{company.fullName}</p>
            <p>ИНН: {company.inn}</p>
            <p>КПП: {company.kpp}</p>
            <p>ОГРН: {company.ogrn}</p>
            <p>ОКВЭД: {company.okved}</p>
          </section>

          <section>
            <h2 className="font-bold uppercase tracking-wider mb-2">Адрес</h2>
            <p>Юридический: {company.legalAddress}</p>
            <p>Почтовый: {company.postalAddress}</p>
          </section>

          <section>
            <h2 className="font-bold uppercase tracking-wider mb-2">Банковские реквизиты</h2>
            <p>Банк: {bank.name}</p>
            <p>БИК: {bank.bik}</p>
            <p>Р/с: {bank.checkingAccount}</p>
            <p>К/с: {bank.correspondentAccount}</p>
          </section>

          <section>
            <h2 className="font-bold uppercase tracking-wider mb-2">Контакты</h2>
            <p>
              Телефон:{' '}
              <a href={`tel:${contacts.phone}`} className="underline">
                {formatPhone(contacts.phone)}
              </a>
            </p>
            <p>
              E-mail:{' '}
              <a href={`mailto:${contacts.email}`} className="underline">
                {contacts.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
