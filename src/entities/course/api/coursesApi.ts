// src/entities/course/api/coursesApi.ts
import { baseApi } from '@/shared/api';
import type { Course } from '@/entities/course/model/typesCourses';

export const coursesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Получить список курсов (пока без параметров, но готово к расширению)
    getCourses: builder.query<Course[], void>({
      query: () => '/courses',
      // Тег для инвалидации (пригодится в 6.4)
      providesTags: ['Course'],
    }),

    // Получить один курс по ID
    getCourseById: builder.query<Course, string>({
      query: (id) => `/courses/${id}`,
      providesTags: ['Course'],
    }),
  }),
});

// Экспортируем хуки для использования в компонентах
export const { useGetCoursesQuery, useGetCourseByIdQuery } = coursesApi;
