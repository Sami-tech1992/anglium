import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import { ROUTES } from '@/shared/config/routes';

const links = [
  { label: 'О школе', path: ROUTES.home },
  { label: 'Контакты', path: ROUTES.home },
  { label: 'Политика конфиденциальности', path: ROUTES.home },
];

export function FooterLinks() {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{ flexWrap: 'wrap', justifyContent: 'center' }}
    >
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.path} // MUI автоматически подставит LinkBehavior (NavLink)
          underline="hover"
          color="text.secondary"
          sx={{ fontSize: '0.875rem' }}
        >
          {link.label}
        </Link>
      ))}
    </Stack>
  );
}
