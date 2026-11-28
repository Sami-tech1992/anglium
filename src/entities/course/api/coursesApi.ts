// src/entities/course/api/coursesApi.ts
import { baseApi } from '@/shared/api';
import type {
  Course,
  GetCoursesParams,
  UpdateCourseData,
} from '@/entities/course/model/typesCourses';

export const coursesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // 1. Получить список курсов (с поддержкой фильтра по уровню)
    getCourses: builder.query<Course[], GetCoursesParams | void>({
      query: (params) => {
        // Если параметров нет или уровень = 'all', не отправляем level на сервер
        const queryParams: Record<string, string> = {};

        if (params?.level && params.level !== 'all') {
          queryParams.level = params.level;
        }

        return {
          url: '/courses',
          params: queryParams,
        };
      },
      providesTags: (result) =>
        result
          ? [
              // Тег для всего списка
              { type: 'Course', id: 'LIST' },
              // Теги для каждого курса из ответа
              ...result.map(({ id }) => ({ type: 'Course' as const, id })),
            ]
          : [{ type: 'Course', id: 'LIST' }],
    }),

    // 2. Получить один курс по ID
    getCourseById: builder.query<Course, string>({
      query: (id) => `/courses/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Course', id }],
    }),

    // 3. Обновить курс (PATCH)
    updateCourse: builder.mutation<
      Course,
      { id: string; data: UpdateCourseData }
    >({
      query: ({ id, data }) => ({
        url: `/courses/${id}`,
        method: 'PATCH',
        body: data,
      }),
      // Инвалидируем тег конкретного курса и тег списка (так как поля видны в каталоге)
      invalidatesTags: (_result, _error, { id }) => [
        { type: 'Course', id },
        { type: 'Course', id: 'LIST' },
      ],
    }),
  }),
});

// Экспортируем хуки для использования в компонентах
export const {
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useUpdateCourseMutation,
} = coursesApi;
