// src/shared/ui/mobile-menu/DrawerNavList.tsx
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useMobileMenu } from './MobileMenuContext';
import { ROUTES } from '@/shared/config/routes';

const menuItems = [
  { label: 'Каталог', path: ROUTES.courses },
  { label: 'Словарь', path: ROUTES.dictionary },
  { label: 'Квиз', path: ROUTES.quiz },
  { label: 'О школе', path: ROUTES.home },
];

export function DrawerNavList() {
  const { closeMenu } = useMobileMenu(); // <-- Получаем функцию из контекста

  return (
    <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
      {menuItems.map((item) => (
        <Button
          key={item.path}
          href={item.path} // MUI сам подставит NavLink (из темы)
          onClick={closeMenu} // <-- Закрываем меню при клике
          fullWidth
          sx={{
            justifyContent: 'flex-start',
            color: 'text.primary',
            fontSize: '1.1rem',
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
}
