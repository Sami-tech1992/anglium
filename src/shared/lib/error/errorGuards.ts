// src/shared/lib/error/errorGuards.ts
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';

export type AppError = FetchBaseQueryError | SerializedError;

/**
 * Проверяет, является ли ошибка ошибкой запроса (FetchBaseQueryError).
 */
export function isFetchBaseQueryError(
  error: unknown
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}

/**
 * Проверяет, является ли ошибка ошибкой с сообщением (SerializedError).
 */
export function isSerializedError(error: unknown): error is SerializedError {
  return (
    typeof error === 'object' &&
    error != null &&
    'message' in error &&
    !('status' in error)
  );
}

/**
 * Возвращает понятный пользователю текст ошибки на русском языке.
 * Функция чистая: ничего не логирует и не выводит в консоль.
 */
export function getHumanReadableError(error: unknown): string {
  // 1. Если ошибки нет
  if (!error) {
    return 'Неизвестная ошибка. Попробуйте позже.';
  }

  // 2. Обработка ошибок запроса (FetchBaseQueryError)
  if (isFetchBaseQueryError(error)) {
    // Сеть недоступна (сервер выключен, нет интернета, CORS)
    if (error.status === 'FETCH_ERROR') {
      return 'Не удалось подключиться к серверу. Проверьте интернет-соединение.';
    }

    // Некорректный ответ (сервер прислал HTML вместо JSON, или JSON невалидный)
    if (error.status === 'PARSING_ERROR') {
      return 'Сервер вернул некорректный ответ. Попробуйте позже.';
    }

    // Таймаут
    if (error.status === 'TIMEOUT_ERROR') {
      return 'Превышено время ожидания ответа от сервера. Попробуйте позже.';
    }

    // Обработка HTTP-статусов (если status - число)
    if (typeof error.status === 'number') {
      // Курс не найден (или другой ресурс)
      if (error.status === 404) {
        return 'Запрашиваемые данные не найдены.';
      }

      // Ошибка сервера (5xx)
      if (error.status >= 500) {
        return 'На сервере произошла ошибка. Мы уже работаем над этим. Попробуйте позже.';
      }

      // Другие HTTP-ошибки (400, 401, 403 и т.д.)
      return `Ошибка запроса (код ${error.status}). Попробуйте позже.`;
    }
  }

  // 3. Обработка ошибок сериализации (SerializedError)
  if (isSerializedError(error)) {
    return 'Произошла непредвиденная ошибка. Попробуйте обновить страницу.';
  }

  // 4. Неизвестная ошибка
  return 'Неизвестная ошибка. Попробуйте позже.';
}
