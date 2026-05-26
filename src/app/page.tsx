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
      className="relative min-h-[100dvh]"
      style={{
        backgroundImage: 'url(/bg-hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
      }}
    >
      {/* Десктоп */}
      <div className="hidden md:flex min-h-[100dvh] items-center">
        <div className="w-full max-w-[55%] pl-[10%] flex flex-col items-center -mt-32">
          <Logo width={180} height={60} />
          <h1 className="mt-6 text-3xl lg:text-4xl font-light text-black uppercase tracking-wider text-center">
            Лаборатория красоты
          </h1>
          <p className="mt-6 text-sm text-black text-center">
            подпишитесь, чтобы узнать о старте продаж в России
          </p>
          <div className="mt-6 w-full max-w-lg">
            <SubscribeForm variant="desktop" />
          </div>
        </div>
      </div>

      {/* Мобильный */}
      <div className="flex md:hidden flex-col min-h-[100dvh]">
        <div className="flex flex-col items-center pt-8 px-4">
          <Logo width={140} height={50} />
          <h1 className="mt-2 text-xl font-light text-black uppercase tracking-wider text-center">
            Лаборатория красоты
          </h1>
        </div>

        <div className="flex-1" />

        <div className="px-4 pb-6">
          <SubscribeForm variant="mobile" />
        </div>
      </div>
    </section>
  );
}
