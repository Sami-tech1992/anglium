// src/pages/courses/ui/CoursesPage.tsx
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { useSearchParams } from 'react-router';
import { ROUTES } from '@/shared/config/routes';
import {
  COURSE_LEVELS,
  type CourseLevel,
} from '@/entities/course/model/typesCourse';

const demoCourseIds = [1, 5, 42, 100];

export function CoursesPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // 1. Читаем уровень из URL
  const levelParam = searchParams.get('level');

  // 2. Проверяем, что уровень валиден (есть в константе)
  const isValidLevel = (value: string | null): value is CourseLevel => {
    return value !== null && COURSE_LEVELS.includes(value as CourseLevel);
  };

  // 3. Текущее значение для селекта (если невалидно — пустая строка)
  const selectedLevel = isValidLevel(levelParam) ? levelParam : '';

  // 4. Обработчик изменения
  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLevel = event.target.value;
    const newParams = new URLSearchParams(searchParams);

    if (newLevel) {
      newParams.set('level', newLevel);
    } else {
      newParams.delete('level'); // «Все уровни» — удаляем параметр
    }

    setSearchParams(newParams);
  };

  return (
    <Stack spacing={3} sx={{ py: 4 }}>
      <Typography variant="h4">Страница каталога курсов</Typography>

      {/* Демонстрация query-параметров */}
      <Box sx={{ maxWidth: 300 }}>
        <TextField
          select
          fullWidth
          label="Уровень"
          value={selectedLevel}
          onChange={handleLevelChange}
          helperText={
            levelParam && !isValidLevel(levelParam)
              ? `Уровень «${levelParam}» не найден, фильтр не применен`
              : 'Выберите уровень для фильтрации'
          }
        >
          <MenuItem value="">Все уровни</MenuItem>
          {COURSE_LEVELS.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))}
        </TextField>
      </Box>

      {/* Временные кнопки-ссылки на курсы */}
      <Typography variant="body1" color="text.secondary">
        Временная демонстрация (будет удалена в тикете 6.3):
      </Typography>
      <Stack direction="row" spacing={2} sx={{ flexWrap: 'wrap', gap: 2 }}>
        {demoCourseIds.map((id) => (
          <Button
            key={id}
            href={ROUTES.course(id)}
            variant="outlined"
            color="primary"
          >
            Курс #{id}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}
