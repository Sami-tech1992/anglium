// src/pages/not-found/ui/NotFoundPage.tsx
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router';
import { ROUTES } from '@/shared/config/routes';

export function NotFoundPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 8,
        gap: 3,
      }}
    >
      <Typography variant="h1" component="h1" sx={{ fontWeight: 700 }}>
        404
      </Typography>
      <Typography variant="h5" component="h2">
        Страница не найдена
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        sx={{ maxWidth: 400 }}
      >
        Возможно, вы ошиблись в адресе или страница была удалена.
      </Typography>
      {/* Кнопка "На главную" через Link из react-router */}
      <Button
        component={Link}
        to={ROUTES.home}
        variant="contained"
        color="primary"
      >
        На главную
      </Button>
    </Box>
  );
}
