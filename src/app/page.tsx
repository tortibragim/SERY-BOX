import { generatePageMetadata } from '@/lib/metadata';
import { SubscribeForm } from '@/components/SubscribeForm';
import Logo from '@/components/ui/Logo';

export const metadata = generatePageMetadata({
  title: 'Главная',
  canonicalPath: '/',
});

export default function HomePage() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center justify-center"
      style={{
        backgroundImage: 'url(/bg-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
      }}
    >
      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Контент */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-16 w-full">
        {/* Логотип */}
        <Logo width={280} height={100} />

        {/* Текст */}
        <h1 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-light text-white uppercase tracking-widest">
          Лаборатория красоты
        </h1>

        {/* Форма подписки */}
        <div className="mt-10 w-full max-w-xl">
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
