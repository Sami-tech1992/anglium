export const COURSE_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

export type CourseLevel = (typeof COURSE_LEVELS)[number];

export interface Course {
  id: string;
  title: string;
  publisher: 'Cambridge' | 'Oxford' | 'Pearson' | 'Other';
  description: string;
  targetAge: string;
  level: CourseLevel;
  price: number;
}

export type CreateCourseData = Omit<Course, 'id'>; // Данные для создания курса: берем все поля Course, кроме 'id'
export type UpdateCourseData = Partial<CreateCourseData>; // Данные для обновления курса: берем CreateCourseData и делаем все поля необязательными
