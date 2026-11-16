// src/shared/config/routes.ts

/**
 * Все пути приложения хранятся здесь, чтобы не разбрасывать строки по коду.
 * Если завтра поменяется URL (например, /courses на /catalog),
 * достаточно будет изменить его в одном месте.
 */
export const ROUTES = {
  /** Главная страница */
  home: '/',

  /** Страница каталога курсов */
  courses: '/courses',

  /**
   * Страница конкретного курса.
   * Принимает ID курса (число или строку) и возвращает путь.
   * Пример: ROUTES.course(5) => '/courses/5'
   */
  course: (id: string | number): string => `/courses/${id}`,

  /** Страница словаря */
  dictionary: '/dictionary',

  /** Страница квиза */
  quiz: '/quiz',

  /** Страница личного кабинета */
  profile: '/profile',
} as const;
