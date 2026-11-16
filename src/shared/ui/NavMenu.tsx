import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ROUTES } from '@/shared/config/routes';

const menuItems = [
  { label: 'Каталог', path: ROUTES.courses },
  { label: 'Словарь', path: ROUTES.dictionary },
  { label: 'Квиз', path: ROUTES.quiz },
  { label: 'О школе', path: ROUTES.home }, // Заглушка
];

export function NavMenu() {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
      {menuItems.map((item) => (
        <Button
          key={item.path}
          href={item.path} // MUI автоматически подставит LinkBehavior (NavLink)
          color="inherit"
          sx={{ textTransform: 'none' }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
}
