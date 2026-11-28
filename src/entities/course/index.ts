// src/entities/course/index.ts

// API хуки
export {
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useUpdateCourseMutation, // <-- Вот здесь он должен быть!
} from './api/coursesApi';

// Типы
export type {
  Course,
  CourseLevel,
  CreateCourseData,
  UpdateCourseData,
  GetCoursesParams,
} from './model/typesCourses';

// Константы
export { COURSE_LEVELS } from './model/typesCourses';

// UI
export { CourseCard } from './ui/CourseCard';
