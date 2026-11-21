// src/pages/home/ui/HomePage.tsx (после очистки)
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export function HomePage() {
  return (
    <Stack spacing={3} sx={{ alignItems: 'center', py: 4 }}>
      <Typography variant="h3" component="h1" align="center">
        Англиум — школа английского языка
      </Typography>
      <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
        Записаться на обучение
      </Button>
    </Stack>
  );
}
