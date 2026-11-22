// src/features/course-filters/model/constants.ts
import type { CourseFiltersState } from './types';

export const initialCourseFiltersState: CourseFiltersState = {
  level: 'all',
  search: '',
  page: 1,
};
