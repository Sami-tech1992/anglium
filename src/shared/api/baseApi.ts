// src/shared/api/baseApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from '@/shared/config/env';

// Базовый API для всего приложения.
// Все эндпоинты (курсы, преподаватели, записи) будут добавляться сюда через injectEndpoints.
export const baseApi = createApi({
  reducerPath: 'api', // Имя ветки состояния в Redux
  baseQuery: fetchBaseQuery({ baseUrl: env.apiUrl }), // Адрес из .env
  tagTypes: ['Course'], // Список тегов для инвалидации (понадобится в 6.4)
  endpoints: () => ({}), // Пока пусто, эндпоинты добавим позже
});
