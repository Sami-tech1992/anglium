// // src/pages/courses/ui/CoursesPage.tsx
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import CircularProgress from '@mui/material/CircularProgress';
// import { useGetCoursesQuery, CourseCard } from '@/entities/course';
// import { CardSkeleton, ErrorState, EmptyState } from '@/shared/ui';
// import { getHumanReadableError } from '@/shared/lib'; // <-- 1. Импортируем утилиту

// const PAGE_SIZE = 6;

// export function CoursesPage() {
//   // 2. Достаем error из хука
//   const { data, isLoading, isFetching, isError, error, refetch } =
//     useGetCoursesQuery();

//   if (isLoading) {
//     return (
//       <Box sx={{ py: 2 }}>
//         <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
//           Каталог курсов
//         </Typography>
//         <CardSkeleton count={PAGE_SIZE} />
//       </Box>
//     );
//   }

//   if (isError) {
//     return (
//       <Box sx={{ py: 2 }}>
//         <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
//           Каталог курсов
//         </Typography>
//         <ErrorState
//           onRetry={() => refetch()}
//           // 3. Передаем ошибку в нашу функцию, чтобы получить осмысленный текст
//           message={getHumanReadableError(error)}
//         />
//       </Box>
//     );
//   }

//   if (!data || data.length === 0) {
//     return (
//       <Box sx={{ py: 2 }}>
//         <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
//           Каталог курсов
//         </Typography>
//         <EmptyState
//           title="Ничего не найдено"
//           description="По вашему запросу курсов нет. Попробуйте изменить фильтры."
//         />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ py: 2 }}>
//       <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mb: 3 }}>
//         <Typography variant="h4" component="h1">
//           Каталог курсов
//         </Typography>
//         {isFetching && <CircularProgress size={24} color="primary" />}
//       </Stack>

//       <Box
//         sx={{
//           opacity: isFetching ? 0.6 : 1,
//           transition: 'opacity 0.2s ease-in-out',
//           pointerEvents: isFetching ? 'none' : 'auto',
//         }}
//       >
//         <Grid container spacing={3}>
//           {data.map((course) => (
//             <Grid key={course.id} size={{ xs: 12, sm: 6, md: 4 }}>
//               <CourseCard course={course} />
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// }
// src/pages/courses/ui/CoursesPage.tsx (временно)
// src/pages/courses/ui/CoursesPage.tsx (временно, с кнопкой)
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

// Импорты из вашей сущности и shared
import {
  useGetCoursesQuery,
  useUpdateCourseMutation,
  CourseCard,
} from '@/entities/course';
import { CardSkeleton, ErrorState, EmptyState } from '@/shared/ui';
import { useAppDispatch, getHumanReadableError } from '@/shared/lib';
import { showNotification } from '@/features/notifications';

const PAGE_SIZE = 6;

export function CoursesPage() {
  const { data, isLoading, isFetching, isError, refetch } =
    useGetCoursesQuery();
  const [updateCourse, { isLoading: isUpdating }] = useUpdateCourseMutation();
  const dispatch = useAppDispatch();

  const handleTestMutation = async () => {
    if (!data || data.length === 0) return;
    const firstCourse = data[0];
    if (!firstCourse) return;

    try {
      await updateCourse({
        id: firstCourse.id,
        data: { rating: 5.0 },
      }).unwrap();
      dispatch(showNotification('Курс успешно обновлен', 'success'));
    } catch (error) {
      dispatch(showNotification(getHumanReadableError(error), 'error'));
    }
  };

  // 1. ТЕПЕРЬ isLoading ИСПОЛЬЗУЕТСЯ ЗДЕСЬ
  if (isLoading) {
    return (
      <Box sx={{ py: 2 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Каталог курсов
        </Typography>
        <CardSkeleton count={PAGE_SIZE} />
      </Box>
    );
  }

  // 2. ТЕПЕРЬ isError И ErrorState ИСПОЛЬЗУЮТСЯ ЗДЕСЬ
  if (isError) {
    return (
      <Box sx={{ py: 2 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Каталог курсов
        </Typography>
        <ErrorState
          onRetry={() => refetch()}
          message="Не удалось загрузить каталог курсов. Проверьте подключение к интернету."
        />
      </Box>
    );
  }

  // 3. ТЕПЕРЬ EmptyState ИСПОЛЬЗУЕТСЯ ЗДЕСЬ
  if (!data || data.length === 0) {
    return (
      <Box sx={{ py: 2 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 3 }}>
          Каталог курсов
        </Typography>
        <EmptyState
          title="Ничего не найдено"
          description="По вашему запросу курсов нет. Попробуйте изменить фильтры."
        />
      </Box>
    );
  }

  return (
    <Box sx={{ py: 2 }}>
      <Stack direction="row" spacing={2} sx={{ alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Каталог курсов
        </Typography>
        {isFetching && <CircularProgress size={24} color="primary" />}

        {/* ВРЕМЕННАЯ КНОПКА */}
        <Button
          variant="contained"
          color="warning"
          onClick={handleTestMutation}
          disabled={isUpdating}
          sx={{ ml: 'auto' }}
        >
          {isUpdating ? 'Обновление...' : 'Тест мутации (с .unwrap)'}
        </Button>
      </Stack>

      <Box
        sx={{
          opacity: isFetching ? 0.6 : 1,
          pointerEvents: isFetching ? 'none' : 'auto',
        }}
      >
        <Grid container spacing={3}>
          {data?.map((course) => (
            <Grid key={course.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <CourseCard course={course} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
