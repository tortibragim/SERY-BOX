'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setIsVisible(true);
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center md:text-left">
          Мы используем cookies для улучшения работы сайта. Продолжая использовать сайт, вы соглашаетесь с{' '}
          <a href="/privacy" className="underline hover:no-underline text-primary">
            политикой обработки cookies
          </a>
        </p>
        <Button variant="outline" size="sm" onClick={acceptCookies} className="whitespace-nowrap">
          Принять
        </Button>
      </div>
    </div>
  );
};
