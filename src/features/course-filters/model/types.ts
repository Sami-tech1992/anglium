// src/features/course-filters/model/types.ts
import type { CourseLevel } from '@/entities/course';

/**
 * Состояние фильтров каталога курсов.
 */
export interface CourseFiltersState {
  /** Выбранный уровень: конкретный (A1-C2) или 'all' (все уровни) */
  level: CourseLevel | 'all';

  /** Строка поиска (по названию курса или описанию) */
  search: string;

  /** Номер текущей страницы (начинается с 1) */
  page: number;
}
