// src/pages/course/ui/CoursePage.tsx
import { useParams } from 'react-router';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { useGetCourseByIdQuery } from '@/entities/course';
import { ErrorState, EmptyState, TextSkeleton, Breadcrumbs } from '@/shared/ui';
import { isFetchBaseQueryError, getHumanReadableError } from '@/shared/lib';
import { ROUTES } from '@/shared/config/routes';

export function CoursePage() {
  const { courseId } = useParams();

  // Запрос данных курса (пропускаем, если ID нет)
  const {
    data: course,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetCourseByIdQuery(courseId || '', { skip: !courseId });

  // 1. Если ID нет в URL или он не является числом (защита из 6.2)
  if (!courseId || !/^\d+$/.test(courseId)) {
    return (
      <Box sx={{ py: 4 }}>
        <EmptyState
          title="Курс не найден"
          description={`Идентификатор «${courseId || 'пусто'}» отсутствует или не является числом.`}
          actionLabel="Вернуться в каталог"
          onAction={() => window.location.assign(ROUTES.courses)}
        />
      </Box>
    );
  }

  const breadcrumbItems = [
    { label: 'Главная', href: ROUTES.home },
    { label: 'Курсы', href: ROUTES.courses },
    { label: course?.title || `Курс #${courseId}` },
  ];

  return (
    <Stack spacing={3}>
      <Breadcrumbs items={breadcrumbItems} />

      {/* 2. Состояние загрузки */}
      {isLoading && (
        <Box sx={{ maxWidth: 600 }}>
          <TextSkeleton lines={2} />
        </Box>
      )}

      {/* 3. Состояние ошибки */}
      {isError && (
        <>
          {/* Если сервер ответил 404 — курс не найден */}
          {isFetchBaseQueryError(error) && error.status === 404 ? (
            <EmptyState
              title="Курс не найден"
              description="Возможно, он был удален или ссылка неверна."
              actionLabel="Вернуться в каталог"
              onAction={() => window.location.assign(ROUTES.courses)}
            />
          ) : (
            // Все остальные ошибки (сеть, 500 и т.д.) — блок с повтором
            <ErrorState
              onRetry={() => refetch()}
              message={getHumanReadableError(error)}
            />
          )}
        </>
      )}

      {/* 4. Состояние успеха (пока выводим только название) */}
      {course && (
        <Box>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            {course.title}
          </Typography>
          {/* Полноценную страницу сделаем в 8.1 */}
        </Box>
      )}
    </Stack>
  );
}
