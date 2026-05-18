import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/config';

export const metadata = generatePageMetadata({
  title: 'Согласие на обработку персональных данных',
  canonicalPath: '/agreement',
});

export default function AgreementPage() {
  return (
    <div className="pt-16">
      <div className="container py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-primary mb-8">
          Согласие на обработку персональных данных
        </h1>

        <div className="space-y-6 text-sm leading-relaxed">
          <p>
            Настоящим я, субъект персональных данных, в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ
            «О персональных данных», даю своё согласие {siteConfig.company.fullName} (ИНН {siteConfig.company.inn})
            на обработку моих персональных данных.
          </p>

          <section>
            <h2 className="font-bold text-base mb-2">Перечень персональных данных</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Фамилия, имя, отчество</li>
              <li>Номер телефона</li>
              <li>Адрес электронной почты</li>
              <li>Наименование организации</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-base mb-2">Цель обработки</h2>
            <p>Обработка обращений, направленных через форму обратной связи на сайте.</p>
          </section>

          <section>
            <h2 className="font-bold text-base mb-2">Срок действия согласия</h2>
            <p>
              Согласие действует до его отзыва. Отзыв согласия осуществляется путём направления
              письменного заявления на адрес: {siteConfig.contacts.email}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
