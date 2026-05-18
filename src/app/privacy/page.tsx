import { generatePageMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/config';

export const metadata = generatePageMetadata({
  title: 'Политика конфиденциальности',
  canonicalPath: '/privacy',
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <div className="pt-16">
      <div className="container py-16 max-w-3xl">
        <h1 className="text-4xl font-bold text-primary mb-8">Политика конфиденциальности</h1>

        <div className="prose prose-sm max-w-none space-y-6 text-sm leading-relaxed">
          <p>
            Настоящая политика конфиденциальности описывает, как {siteConfig.company.fullName} (далее — «Компания»)
            собирает, использует и защищает персональные данные пользователей сайта {siteConfig.company.domain}.
          </p>

          <section>
            <h2 className="font-bold text-base mb-2">1. Сбор данных</h2>
            <p>
              Компания собирает данные, которые пользователь добровольно предоставляет при заполнении форм на сайте:
              имя, номер телефона, адрес электронной почты, название компании.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base mb-2">2. Использование данных</h2>
            <p>
              Собранные данные используются исключительно для обработки обращений пользователей и связи с ними.
              Данные не передаются третьим лицам без согласия пользователя.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base mb-2">3. Cookies</h2>
            <p>
              Сайт использует файлы cookies для улучшения работы. Пользователь может отключить cookies
              в настройках браузера, однако это может повлиять на функциональность сайта.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-base mb-2">4. Контакты</h2>
            <p>
              По вопросам обработки персональных данных обращайтесь: {siteConfig.contacts.email}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
