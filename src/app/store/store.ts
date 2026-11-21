// src/app/store/store.ts
import { notificationsReducer } from '@/features/notifications';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
  },
});

// Выводим типы из самого store (согласно TypeScript Quick Start)
export type RootState = ReturnType<typeof store.getState>; // 1. Тип всего состояния
export type AppDispatch = typeof store.dispatch; // 2. Тип функции отправки действий
