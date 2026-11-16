// src/app/RouteError.tsx
import { useRouteError, isRouteErrorResponse } from 'react-router';
import { ErrorState } from '@/shared/ui';

export function RouteError() {
  const error = useRouteError();

  let message =
    'Произошла непредвиденная ошибка. Попробуйте обновить страницу.';

  // Если ошибка была выброшена как Response (например, 404 от loader)
  if (isRouteErrorResponse(error)) {
    message = `Ошибка ${error.status}: ${error.statusText || 'Страница не найдена'}`;
  }
  // Если это обычная JavaScript-ошибка
  else if (error instanceof Error) {
    message = error.message;
  }

  // Используем наш готовый блок ошибки
  return (
    <ErrorState
      title="Упс! Что-то пошло не так"
      message={message}
      // Кнопка "Повторить" просто перезагрузит страницу
      onRetry={() => window.location.reload()}
    />
  );
}
