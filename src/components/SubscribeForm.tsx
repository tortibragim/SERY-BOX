'use client';

import React, { useState } from 'react';

export const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
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

    if (!agreed) {
      setError('Необходимо согласие с политикой обработки персональных данных');
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
        setAgreed(false);
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

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-0">
        <input
          type="email"
          placeholder="Укажите ваш e-mail"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError('');
          }}
          disabled={isLoading}
          className="flex-1 px-5 py-3.5 bg-transparent border border-white/40 text-white placeholder-white/60 text-sm focus:outline-none focus:border-white transition-colors sm:border-r-0"
          autoComplete="email"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-8 py-3.5 border border-white/40 text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? '...' : 'Подписаться'}
        </button>
      </div>

      <label className="flex items-center gap-3 mt-4 cursor-pointer select-none text-left">
        <span className="relative w-5 h-5 flex-shrink-0">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => {
              setAgreed(e.target.checked);
              if (error) setError('');
            }}
            disabled={isLoading}
            className="peer absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <span className="block w-5 h-5 border border-white/60 peer-checked:border-white peer-checked:bg-transparent transition-colors" />
          <svg
            className="absolute inset-0 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none p-0.5"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 8 7 12 13 4" />
          </svg>
        </span>
        <span className="text-white/70 text-xs leading-relaxed">
          Я согласен с{' '}
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline text-white/90"
          >
            политикой в отношении обработки персональных данных
          </a>
        </span>
      </label>

      {error && (
        <p className="mt-3 text-red-300 text-xs text-center">{error}</p>
      )}
      {success && (
        <p className="mt-3 text-green-300 text-xs text-center">{success}</p>
      )}
    </form>
  );
};
