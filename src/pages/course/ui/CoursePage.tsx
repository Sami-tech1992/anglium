import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useParams, Link } from 'react-router';
import { ErrorState } from '@/shared/ui';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { ROUTES } from '@/shared/config/routes';
import { useUpdateCourseMutation } from '@/entities/course';

export function CoursePage() {
  const [updateCourse, { isLoading }] = useUpdateCourseMutation();

  const { courseId } = useParams();

  if (!courseId) {
    return (
      <ErrorState
        title="Курс не найден"
        message="В адресе отсутствует идентификатор курса."
      />
    );
  }

  // Проверка на числовой ID (согласно багу из 6.2)
  if (!/^\d+$/.test(courseId)) {
    return (
      <ErrorState
        title="Курс не найден"
        message={`Идентификатор «${courseId}» не является числом.`}
      />
    );
  }

  const breadcrumbItems = [
    { label: 'Главная', href: ROUTES.home },
    { label: 'Курсы', href: ROUTES.courses },
    { label: `Курс #${courseId}` },
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs items={breadcrumbItems} />
      <Typography variant="h4">Страница курса</Typography>
      <Typography variant="body1">
        Идентификатор курса: <strong>{courseId}</strong>
      </Typography>
      <Button
        component={Link}
        to={ROUTES.courses}
        variant="outlined"
        sx={{ alignSelf: 'flex-start' }}
      >
        Назад к каталогу
      </Button>
      <Button
        variant="contained"
        color="warning"
        disabled={isLoading}
        onClick={() => updateCourse({ id: courseId, data: { price: 9999 } })}
      >
        Изменить цену на 9999
      </Button>
    </Stack>
  );
}
