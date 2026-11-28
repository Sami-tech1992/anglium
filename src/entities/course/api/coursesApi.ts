import { baseApi } from '@/shared/api';
import type {
  Course,
  UpdateCourseData,
} from '@/entities/course/model/typesCourses';

export const coursesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Получить список курсов
    getCourses: builder.query<Course[], void>({
      query: () => '/courses',
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

    // Получить один курс по ID
    getCourseById: builder.query<Course, string>({
      query: (id) => `/courses/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Course', id }],
    }),
    updateCourse: builder.mutation<
      Course,
      { id: string; data: UpdateCourseData }
    >({
      query: ({ id, data }) => ({
        url: `/courses/${id}`,
        method: 'PATCH',
        body: data,
      }),
      // Инвалидируем тег конкретного курса, чтобы обновились данные на странице
      // и тег LIST, так как в списке могут отображаться поля, которые мы меняем (например, цена или название)
      // Оптимизированный вариант (на будущее)
      invalidatesTags: (_result, _error, { id, data }) => {
        const listTags = [{ type: 'Course' as const, id: 'LIST' }];
        const itemTags = [{ type: 'Course' as const, id }];

        // Если в data есть поля, которые видны в списке — сбрасываем и список
        const affectsList = [
          'title',
          'price',
          'level',
          'rating',
          'description',
          'duration',
        ].some((key) => key in data);

        return affectsList ? [...itemTags, ...listTags] : itemTags;
      },
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetCourseByIdQuery,
  useUpdateCourseMutation, // Экспортируем новый хук
} = coursesApi;
