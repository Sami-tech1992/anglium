// src/features/course-filters/index.ts
export {
  courseFiltersReducer,
  setLevel,
  setSearch,
  setPage,
  resetFilters,
} from './model/courseFiltersSlice';
export {
  selectCourseFilters,
  selectCourseLevel,
  selectCourseSearch,
  selectCoursePage,
  selectHasActiveFilters,
} from './model/selectors';
export type { CourseFiltersState } from './model/types';
