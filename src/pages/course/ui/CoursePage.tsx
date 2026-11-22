// src/pages/course/ui/CoursePage.tsx
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useParams } from 'react-router';
import { ErrorState } from '@/shared/ui';
import { Breadcrumbs } from '@/shared/ui/breadcrumbs';
import { ROUTES } from '@/shared/config/routes';

export function CoursePage() {
  const { courseId } = useParams();

  if (!courseId) {
    return (
      <ErrorState
        title="Курс не найден"
        message="В адресе отсутствует идентификатор курса."
      />
    );
  }

  // Проверяем, что ID — это число (строка из цифр)
  if (!/^\d+$/.test(courseId)) {
    return (
      <ErrorState
        title="Курс не найден"
        message={`Идентификатор «${courseId}» не является числом.`}
      />
    );
  }

  // Дальше можно использовать courseId как строку для запроса к API
  // Например: fetch(`${env.apiUrl}/courses/${courseId}`)

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
    </Stack>
  );
}
