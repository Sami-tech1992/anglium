// src/features/notifications/model/notificationsSlice.ts
import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit';
import type {
  NotificationsState,
  NotificationType,
  Notification,
} from './types';

const initialState: NotificationsState = {
  list: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    // Используем prepare для генерации ID до редьюсера
    showNotification: {
      // prepare генерирует ID и возвращает payload
      prepare(text: string, type: NotificationType) {
        return {
          payload: {
            id: nanoid(), // Генерация происходит здесь, вне редьюсера
            text,
            type,
          } as Notification,
        };
      },
      // reducer теперь получает уже готовый объект с ID
      reducer(state, action: PayloadAction<Notification>) {
        state.list.push(action.payload);
      },
    },
    // removeNotification не нуждается в prepare, так как ID приходит извне
    removeNotification: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((n) => n.id !== action.payload);
    },
  },
});

export const { showNotification, removeNotification } =
  notificationsSlice.actions;
export const notificationsReducer = notificationsSlice.reducer;
