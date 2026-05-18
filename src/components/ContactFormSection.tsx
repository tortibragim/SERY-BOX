'use client';

import React, { useState } from 'react';
import { IconBrandTelegram } from '@tabler/icons-react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { siteConfig } from '@/lib/config';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const applyPhoneMask = (value: string): string => {
    const digits = value.replace(/\D/g, '').slice(0, 11);
    if (digits.length === 0) return '';
    let result = '+7';
    if (digits.length > 1) result += ' ' + digits.slice(1, 4);
    if (digits.length >= 4) result += ' ' + digits.slice(4, 7);
    if (digits.length >= 7) result += '-' + digits.slice(7, 9);
    if (digits.length >= 9) result += '-' + digits.slice(9, 11);
    return result.trim();
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, phone: applyPhoneMask(e.target.value) }));
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = formData.phone.replace(/\D/g, '');

    if (!formData.name || !cleanPhone || !formData.email || !formData.message) {
      setError('Пожалуйста, заполните все обязательные поля');
      return;
    }
    if (cleanPhone.length !== 11) {
      setError('Введите корректный номер телефона (10 цифр после +7)');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, phone: cleanPhone }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
        setFormData({ name: '', company: '', phone: '', email: '', message: '' });
        setTimeout(() => setSuccess(''), 5000);
      } else {
        throw new Error(result.error || 'Ошибка отправки');
      }
    } catch {
      setError('Ошибка отправки. Попробуйте позже или напишите нам в Telegram.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacts" className="pb-4">
      <div className="container">
        <div className="bg-gray-50 grid grid-cols-1 lg:grid-cols-2 gap-16 md:p-8 p-4 rounded-[.75rem] md:rounded-[1.5rem]">

          {/* Left side */}
          <div className="flex flex-col justify-between items-center space-y-8">
            <div className="space-y-4">
              <Badge variant="outline">Связаться с нами</Badge>
              <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-16">
                {/* TODO: заголовок секции */}
                Заполните форму и мы вам ответим
              </h2>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                или напишите нам в Telegram
              </h3>
              <p className="text-primary">Ответим в течение часа.</p>
            </div>

            <Button
              variant="outline"
              size="lg"
              href={siteConfig.contacts.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <IconBrandTelegram size={24} strokeWidth={1.5} />
              Telegram
            </Button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Имя*" name="name" autoComplete="name" placeholder="Ваше имя" value={formData.name} onChange={handleChange} required disabled={isLoading} />
              <Input label="Компания" name="company" autoComplete="organization" placeholder="Название компании" value={formData.company} onChange={handleChange} disabled={isLoading} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Телефон*" name="phone" autoComplete="off" type="tel" placeholder="+7 000 000-00-00" value={formData.phone} onChange={handlePhoneChange} required disabled={isLoading} />
              <Input label="Почта*" name="email" autoComplete="email" type="email" placeholder="your@email.ru" value={formData.email} onChange={handleChange} required disabled={isLoading} />
            </div>

            <Textarea
              label="Сообщение*"
              name="message"
              placeholder="Опишите вашу задачу..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              disabled={isLoading}
            />

            <p className="text-gray-500 text-center text-sm">
              Отправляя запрос, вы соглашаетесь с{' '}
              <a href="/privacy" className="underline hover:no-underline">политикой конфиденциальности</a>{' '}
              и даете{' '}
              <a href="/agreement" className="underline hover:no-underline">согласие на обработку персональных данных</a>
            </p>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm text-center">{error}</p>
              </div>
            )}
            {success && (
              <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-600 text-sm text-center">{success}</p>
              </div>
            )}

            <Button variant="primary" size="lg" type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Отправка...' : 'Отправить'}
            </Button>
          </form>

        </div>
      </div>
    </section>
  );
};
