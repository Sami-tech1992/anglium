// src/shared/ui/mobile-menu/DrawerHeader.tsx
import Box from '@mui/material/Box';
import { Logo } from '../Logo';

export function DrawerHeader() {
  return (
    <Box sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
      <Logo variant="h5" />
    </Box>
  );
}
