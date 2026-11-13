import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const menuItems = ['Каталог', 'Словарь', 'Квиз', 'О школе'];

export function NavMenu() {
  return (
    <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
      {menuItems.map((item) => (
        <Button key={item} color="inherit" sx={{ textTransform: 'none' }}>
          {item}
        </Button>
      ))}
    </Box>
  );
}
