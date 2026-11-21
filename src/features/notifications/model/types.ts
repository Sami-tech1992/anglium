// src/features/notifications/model/types.ts

// Тип уведомления — объединение строковых литералов (а не просто string)
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

// Одно уведомление
export interface Notification {
  id: string;
  text: string;
  type: NotificationType;
}

// Состояние слайса
export interface NotificationsState {
  list: Notification[];
}
