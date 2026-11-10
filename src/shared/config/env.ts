// src/shared/config/env.ts

/**
 * Читает переменную окружения и падает с понятной ошибкой,
 * если она не задана или пуста.
 */
function getRequiredEnv(key: keyof ImportMetaEnv): string {
  const value = import.meta.env[key];

  if (value === undefined || value === '') {
    throw new Error(
      `[Config] Отсутствует обязательная переменная окружения "${key}". ` +
        `Проверьте файл .env (шаблон: .env.example) и перезапустите dev-сервер.`
    );
  }

  return value;
}

/**
 * Единая точка доступа к переменным окружения.
 * Все остальные модули должны импортировать значения отсюда,
 * а не обращаться к import.meta.env напрямую.
 */
export const env = {
  apiUrl: getRequiredEnv('VITE_API_URL'),
} as const;
