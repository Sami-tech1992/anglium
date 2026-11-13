import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ThemeToggle } from './ThemeToggle';

export function HeaderActions() {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
      <ThemeToggle />
      <Button variant="outlined" color="primary">
        Вход
      </Button>
    </Stack>
  );
}
