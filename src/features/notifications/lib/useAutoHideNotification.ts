// src/features/notifications/lib/useAutoHideNotification.ts
import { useEffect } from 'react';
import { useAppDispatch } from '@/shared/lib';
import { removeNotification } from '../model/notificationsSlice';

/**
 * Автоматически удаляет уведомление по его ID через заданную задержку.
 * Если ID меняется (например, показано новое уведомление), таймер перезапускается.
 * Если компонент размонтируется, таймер очищается (без утечек).
 */
export function useAutoHideNotification(id: string | undefined, delay = 5000) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!id) return;

    const timer = setTimeout(() => {
      dispatch(removeNotification(id));
    }, delay);

    return () => clearTimeout(timer);
  }, [id, delay, dispatch]);
}
