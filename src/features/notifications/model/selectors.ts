// src/features/notifications/model/selectors.ts
import type { RootState } from '@/app/store';
import type { Notification } from './types';

// Селектор для получения списка уведомлений
export const selectNotifications = (state: RootState): Notification[] =>
  state.notifications.list;
