// src/features/course-filters/model/selectors.ts
import type { RootState } from '@/app/store';
import type { CourseFiltersState } from './types';
import type { CourseLevel } from '@/entities/course';

// Селектор всего набора фильтров
export const selectCourseFilters = (state: RootState): CourseFiltersState =>
  state.courseFilters;

// Точечные селекторы
export const selectCourseLevel = (state: RootState): CourseLevel | 'all' =>
  state.courseFilters.level;

export const selectCourseSearch = (state: RootState): string =>
  state.courseFilters.search;

export const selectCoursePage = (state: RootState): number =>
  state.courseFilters.page;

// Селектор: есть ли активные фильтры (для кнопки сброса)
export const selectHasActiveFilters = (state: RootState): boolean => {
  const { level, search } = state.courseFilters;
  return level !== 'all' || search.trim() !== '';
};
