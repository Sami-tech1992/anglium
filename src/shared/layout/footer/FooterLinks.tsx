// src/shared/layout/footer/FooterLinks.tsx
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const links = ['О школе', 'Контакты', 'Политика конфиденциальности'];

export function FooterLinks() {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {links.map((link) => (
        <Link
          key={link}
          href="#"
          underline="hover"
          color="text.secondary"
          sx={{ fontSize: '0.875rem' }}
        >
          {link}
        </Link>
      ))}
    </Stack>
  );
}
