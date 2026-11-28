// src/app/store/store.ts
import { courseFiltersReducer } from '@/features/course-filters';
import { notificationsReducer } from '@/features/notifications';
import { baseApi } from '@/shared/api';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

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

// Включает слушатели для refetchOnFocus и refetchOnReconnect
setupListeners(store.dispatch);

// Выводим типы из самого store (согласно TypeScript Quick Start)
export type RootState = ReturnType<typeof store.getState>; // 1. Тип всего состояния
export type AppDispatch = typeof store.dispatch; // 2. Тип функции отправки действий
