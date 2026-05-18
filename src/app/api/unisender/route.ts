// app/api/unisender/route.ts
// Обработчик подписки — добавляет email в список UniSender через API
// Настройте UNISENDER_API_KEY и UNISENDER_LIST_ID в .env.local

import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.UNISENDER_API_KEY;
const LIST_ID = process.env.UNISENDER_LIST_ID;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  if (!API_KEY || !LIST_ID) {
    console.error('UniSender: UNISENDER_API_KEY или UNISENDER_LIST_ID не заданы');
    return NextResponse.json(
      { success: false, error: 'Сервис временно недоступен' },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Некорректный формат запроса' },
      { status: 400 }
    );
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json(
      { success: false, error: 'Некорректный формат запроса' },
      { status: 400 }
    );
  }

  const { email } = body as Record<string, unknown>;

  if (!email || typeof email !== 'string' || !isValidEmail(email.trim())) {
    return NextResponse.json(
      { success: false, error: 'Введите корректный email' },
      { status: 422 }
    );
  }

  try {
    // UniSender API: subscribe
    // https://www.unisender.com/ru/support/api/contacts/subscribe/
    const params = new URLSearchParams({
      format: 'json',
      api_key: API_KEY,
      list_ids: LIST_ID,
      'fields[email]': email.trim().toLowerCase(),
      double_optin: '3', // 3 = без подтверждения (добавить сразу)
    });

    const response = await fetch('https://api.unisender.com/ru/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    });

    const data = await response.json();

    if (data.result) {
      return NextResponse.json({ success: true });
    }

    // UniSender возвращает ошибку
    const errorMessage = data.error || 'Ошибка при подписке';
    console.error('UniSender API error:', data);
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  } catch (error) {
    console.error('UniSender fetch error:', error);
    return NextResponse.json(
      { success: false, error: 'Ошибка отправки. Попробуйте позже.' },
      { status: 500 }
    );
  }
}
