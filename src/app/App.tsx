import Tipography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { ThemeToggle } from '@/shared/ui/ThemeToggle';

function App() {
  return (
    <>
      <Stack spacing={3} sx={{ p: 4, alignItems: 'flex-start' }}>
        <ThemeToggle />

        <Tipography variant="h2" component="h1">
          Англиум — школа английского языка
        </Tipography>
        <Button variant="contained" color="secondary" endIcon={<SendIcon />}>
          Записаться на обучение
        </Button>
      </Stack>
    </>
  );
}

export default App;
