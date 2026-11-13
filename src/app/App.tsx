// src/app/App.tsx
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { PageLayout } from '../shared/layout/PageLayout';

function App() {
  return (
    <PageLayout>
      <Stack spacing={3} sx={{ alignItems: 'center' }}>
        <Typography variant="h3" component="h1">
          Англиум — школа английского языка
        </Typography>
        <Button variant="contained" endIcon={<SendIcon />}>
          Записаться на обучение
        </Button>
      </Stack>
    </PageLayout>
  );
}

export default App;
