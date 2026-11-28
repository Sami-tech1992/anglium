import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export function HomePage() {
  return (
    <Stack
      spacing={4}
      sx={{ alignItems: 'center', py: 8, textAlign: 'center' }}
    >
      <Typography variant="h3" component="h1">
        Англиум — школа английского языка
      </Typography>
      <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600 }}>
        Изучайте английский с лучшими преподавателями. Индивидуальный подход,
        современные материалы и удобный формат обучения.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        endIcon={<SendIcon />}
        href="/courses"
      >
        Перейти в каталог курсов
      </Button>
    </Stack>
  );
}
