import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  /** Выравнивание контента. По умолчанию left (рекомендуется design-taste skill) */
  align?: 'left' | 'center';
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  align = 'left',
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'pt-16 min-h-[100dvh] flex items-center',
        className
      )}
    >
      <div className="container">
        <div className={cn('max-w-4xl', align === 'center' && 'mx-auto text-center')}>
          <h1 className="text-5xl lg:text-7xl font-bold text-primary tracking-tighter leading-none">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className={cn('mt-10 flex gap-4 flex-wrap', align === 'center' && 'justify-center')}>
              {primaryCta && (
                <Button variant="primary" size="lg" href={primaryCta.href}>
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button variant="outline" size="lg" href={secondaryCta.href}>
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
