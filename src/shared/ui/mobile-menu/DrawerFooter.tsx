// src/shared/ui/mobile-menu/DrawerFooter.tsx
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export function DrawerFooter() {
  return (
    <Box sx={{ mt: 'auto', p: 2 }}>
      <Divider sx={{ mb: 2 }} />
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Англиум
      </Typography>
    </Box>
  );
}
