// src/pages/courses/ui/CoursesPage.tsx
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

import { useGetCoursesQuery, CourseCard } from '@/entities/course';
import { CardSkeleton, ErrorState, EmptyState } from '@/shared/ui';
import {
  CourseLevelFilter,
  selectCourseLevel,
} from '@/features/course-filters';
import { useAppSelector } from '@/shared/lib';

const PAGE_SIZE = 6;

export function CoursesPage() {
  // 1. Берем выбранный уровень из Redux
  const selectedLevel = useAppSelector(selectCourseLevel);

  // 2. Передаем его в запрос.
  // data содержит СТАРЫЙ список, пока грузится новый (благодаря этому нет мигания)
  const { data, isLoading, isFetching, isError, refetch } = useGetCoursesQuery({
    level: selectedLevel,
  });

  return (
    <Box sx={{ py: 2 }}>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Каталог курсов
        </Typography>
        {/* Спиннер, который показывается при ЛЮБОМ запросе (включая фоновое обновление) */}
        {isFetching && <CircularProgress size={24} color="primary" />}
      </Stack>

      {/* Компонент фильтра */}
      <CourseLevelFilter />

      {/* 3. Скелетоны показываем ТОЛЬКО при первой загрузке (когда данных еще нет) */}
      {isLoading && <CardSkeleton count={PAGE_SIZE} />}

      {/* 4. Блок ошибки */}
      {isError && (
        <ErrorState
          onRetry={() => refetch()}
          message="Не удалось загрузить каталог курсов. Проверьте подключение к интернету."
        />
      )}

      {/* 5. Пустой результат (когда запрос прошел, но ничего не найдено) */}
      {!isLoading && !isError && (!data || data.length === 0) && (
        <EmptyState
          title="Ничего не найдено"
          description="По вашему запросу курсов нет. Попробуйте изменить фильтры."
        />
      )}

      {/* 6. Успешная загрузка + фоновое обновление */}
      {!isLoading && !isError && data && data.length > 0 && (
        <Box
          sx={{
            // Затемнение и блокировка кликов, пока идет фоновое обновление
            opacity: isFetching ? 0.6 : 1,
            transition: 'opacity 0.2s ease-in-out',
            pointerEvents: isFetching ? 'none' : 'auto',
          }}
        >
          <Grid container spacing={3}>
            {data.map((course) => (
              <Grid key={course.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
}
