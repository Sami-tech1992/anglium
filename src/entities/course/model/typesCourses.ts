// src/entities/course/model/typesCourses.ts

export const COURSE_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;
export type CourseLevel = (typeof COURSE_LEVELS)[number];

export interface Course {
  id: string;
  title: string;
  description: string;
  level: CourseLevel;
  price: number;
  duration: number; // <-- Добавили (длительность)
  rating: number; // <-- Добавили (рейтинг)
  teacherId: string; // <-- Добавили (связь с преподавателем)
}

export interface GetCoursesParams {
  level?: CourseLevel | 'all';
}

export type CreateCourseData = Omit<Course, 'id'>;
export type UpdateCourseData = Partial<CreateCourseData>;
