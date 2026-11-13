// src/shared/layout/footer/Footer.tsx
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Logo } from '../../ui/Logo'; // <-- Переиспользуем!
import { FooterLinks } from './FooterLinks';
import { FooterCopyright } from './FooterCopyright';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        borderTop: 1,
        borderColor: 'divider',
        backgroundColor: 'background.paper',
      }}
    >
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <Logo />
        <FooterLinks />
        <FooterCopyright />
      </Stack>
    </Box>
  );
}
