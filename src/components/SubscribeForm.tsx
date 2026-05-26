'use client';

import React, { useState } from 'react';

interface SubscribeFormProps {
  variant?: 'desktop' | 'mobile';
}

export const SubscribeForm: React.FC<SubscribeFormProps> = ({ variant = 'desktop' }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email.trim()) {
      setError('Введите email');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/unisender', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess('Вы успешно подписались!');
        setEmail('');
        setTimeout(() => setSuccess(''), 5000);
      } else {
        throw new Error(result.error || 'Ошибка подписки');
      }
    } catch {
      setError('Ошибка отправки. Попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  if (variant === 'mobile') {
    return (
      <form onSubmit={handleSubmit} className="w-full">
        <p className="text-sm text-white mb-3 text-center">
          Подпишитесь, чтобы узнать о старте продаж в России
        </p>

        <input
          type="email"
          placeholder="укажите ваш email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          disabled={isLoading}
          className="w-full px-5 h-10 bg-transparent border border-white text-white placeholder-white text-sm text-center focus:outline-none focus:border-white transition-colors"
          autoComplete="email"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-2 px-8 h-10 border border-white bg-white text-primary text-sm uppercase tracking-wider hover:opacity-80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? '...' : 'подписаться'}
        </button>

        {error && <p className="mt-3 text-red-600 text-xs">{error}</p>}
        {success && <p className="mt-3 text-green-600 text-xs">{success}</p>}
      </form>
    );
  }

  // Desktop variant
  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-3">
        <input
          type="email"
          placeholder="укажите ваш e-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          disabled={isLoading}
          className="flex-1 px-5 h-10 bg-transparent border border-white text-white placeholder-white text-sm text-center focus:outline-none focus:border-white transition-colors"
          autoComplete="email"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-8 h-10 border border-white bg-white text-primary text-sm uppercase tracking-wider hover:opacity-80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? '...' : 'подписаться'}
        </button>
      </div>

      {error && <p className="mt-3 text-red-600 text-xs text-center">{error}</p>}
      {success && <p className="mt-3 text-green-600 text-xs text-center">{success}</p>}
    </form>
  );
};
