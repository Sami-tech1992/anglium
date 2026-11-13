// src/shared/ui/mobile-menu/DrawerNavList.tsx
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const menuItems = ['Каталог', 'Словарь', 'Квиз', 'О школе'];

interface DrawerNavListProps {
  onItemClick: () => void;
}

export function DrawerNavList({ onItemClick }: DrawerNavListProps) {
  return (
    <Box
      sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}
      role="presentation"
    >
      {menuItems.map((item) => (
        <Button
          key={item}
          fullWidth
          onClick={onItemClick}
          sx={{
            justifyContent: 'flex-start',
            color: 'text.primary',
            fontSize: '1.1rem',
            py: 1.5,
            px: 2,
            borderRadius: 2,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'action.hover',
            },
          }}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
}
