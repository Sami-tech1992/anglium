// src/app/store/store.ts
import { courseFiltersReducer } from '@/features/course-filters';
import { notificationsReducer } from '@/features/notifications';
import { baseApi } from '@/shared/api';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
    courseFilters: courseFiltersReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  // Подключаем middleware RTK Query (нужен для кэширования, инвалидации и т.д.)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

// Выводим типы из самого store (согласно TypeScript Quick Start)
export type RootState = ReturnType<typeof store.getState>; // 1. Тип всего состояния
export type AppDispatch = typeof store.dispatch; // 2. Тип функции отправки действий
