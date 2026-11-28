// // src/pages/courses/ui/CoursesPage.tsx
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import MenuItem from '@mui/material/MenuItem';
// import TextField from '@mui/material/TextField';
// import { useSearchParams } from 'react-router';
// import { ROUTES } from '@/shared/config/routes';
// import {
//   COURSE_LEVELS,
//   type CourseLevel,
// } from '@/entities/course/model/typesCourses';

// const demoCourseIds = [1, 5, 42, 100];

// export function CoursesPage() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   // 1. Читаем уровень из URL
//   const levelParam = searchParams.get('level');

//   // 2. Проверяем, что уровень валиден (есть в константе)
//   const isValidLevel = (value: string | null): value is CourseLevel => {
//     return value !== null && COURSE_LEVELS.includes(value as CourseLevel);
//   };

//   // 3. Текущее значение для селекта (если невалидно — пустая строка)
//   const selectedLevel = isValidLevel(levelParam) ? levelParam : '';

//   // 4. Обработчик изменения
//   const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const newLevel = event.target.value;
//     const newParams = new URLSearchParams(searchParams);

//     if (newLevel) {
//       newParams.set('level', newLevel);
//     } else {
//       newParams.delete('level'); // «Все уровни» — удаляем параметр
//     }

//     setSearchParams(newParams);
//   };

//   return (
//     <Stack spacing={3} sx={{ py: 4 }}>
//       <Typography variant="h4">Страница каталога курсов</Typography>

//       {/* Демонстрация query-параметров */}
//       <Box sx={{ maxWidth: 300 }}>
//         <TextField
//           select
//           fullWidth
//           label="Уровень"
//           value={selectedLevel}
//           onChange={handleLevelChange}
//           helperText={
//             levelParam && !isValidLevel(levelParam)
//               ? `Уровень «${levelParam}» не найден, фильтр не применен`
//               : 'Выберите уровень для фильтрации'
//           }
//         >
//           <MenuItem value="">Все уровни</MenuItem>
//           {COURSE_LEVELS.map((level) => (
//             <MenuItem key={level} value={level}>
//               {level}
//             </MenuItem>
//           ))}
//         </TextField>
//       </Box>

//       {/* Временные кнопки-ссылки на курсы */}
//       <Typography variant="body1" color="text.secondary">
//         Временная демонстрация (будет удалена в тикете 6.3):
//       </Typography>
//       <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
//         {demoCourseIds.map((id) => (
//           <Button
//             key={id}
//             href={ROUTES.course(id)}
//             variant="outlined"
//             color="primary"
//           >
//             Курс #{id}
//           </Button>
//         ))}
//       </Stack>
//     </Stack>
//   );
// }

// src/pages/courses/ui/CoursesPage.tsx
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import Alert from '@mui/material/Alert';
// import CircularProgress from '@mui/material/CircularProgress';
// import { useGetCoursesQuery } from '@/entities/course';

// export function CoursesPage() {
//   const { data, isLoading, isFetching, isError } = useGetCoursesQuery();

//   return (
//     <Stack spacing={2} sx={{ py: 4 }}>
//       <Typography variant="h4">
//         Страница каталога курсов (временная проверка)
//       </Typography>

//       <Stack spacing={1}>
//         <Typography>isLoading: {String(isLoading)}</Typography>
//         <Typography>isFetching: {String(isFetching)}</Typography>
//         <Typography>isError: {String(isError)}</Typography>
//         <Typography>Количество курсов: {data?.length ?? 0}</Typography>
//       </Stack>

//       {isLoading && <CircularProgress />}
//       {isError && <Alert severity="error">Ошибка загрузки курсов</Alert>}
//     </Stack>
//   );
// }

// src/pages/courses/ui/CoursesPage.tsx
// src/pages/courses/ui/CoursesPage.tsx
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetCoursesQuery, CourseCard } from '@/entities/course';
import { CardSkeleton, ErrorState, EmptyState } from '@/shared/ui';

const PAGE_SIZE = 6;

export function CoursesPage() {
  const { data, isLoading, isFetching, isError, refetch } =
    useGetCoursesQuery();

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
      </Stack>

      <Box
        sx={{
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
    </Box>
  );
}
