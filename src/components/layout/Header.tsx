'use client';

import { Button } from '@/components/ui/Button';
import Logo from '@/components/ui/Logo';
import { cn } from '@/lib/utils';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { siteConfig } from '@/lib/config';

export const Header: React.FC = () => {
  const { scrollToSection } = useSmoothScroll(64);

  const handleContactClick = () => {
    scrollToSection('contacts');
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'h-16 items-center hidden md:flex',
          'glass border-b border-white/20'
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            href="/"
            className="uppercase flex flex-col text-xs text-primary tracking-wider gap-[4px]"
          >
            <Logo width={100} height={30} className="text-primary" />
            {siteConfig.company.shortName}
          </a>

          <nav className="flex items-center gap-3">
            {siteConfig.navigation.header.map((item) => (
              <Button key={item.label} href={item.href} variant="secondary" size="sm">
                {item.label}
              </Button>
            ))}
          </nav>

          <Button
            variant="primary"
            size="sm"
            onClick={handleContactClick}
            className="flex-shrink-0"
            type="button"
          >
            Связаться
          </Button>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          'h-16 flex items-center md:hidden',
          'glass border-b border-white/20'
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            href="/"
            className="uppercase flex flex-col text-xs text-primary tracking-wider gap-[4px]"
          >
            <Logo width={100} height={30} className="text-primary" />
            {siteConfig.company.shortName}
          </a>

          <Button variant="primary" size="sm" onClick={handleContactClick} type="button">
            Связаться
          </Button>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass border-t border-white/20 px-4 py-2">
        <div className="grid grid-cols-3 gap-3">
          {siteConfig.navigation.header.map((item) => (
            <Button key={item.label} href={item.href} variant="secondary" size="sm" className="w-full">
              {item.label}
            </Button>
          ))}
        </div>
      </nav>
    </>
  );
};
