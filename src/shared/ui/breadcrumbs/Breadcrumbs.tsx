// src/shared/ui/breadcrumbs/Breadcrumbs.tsx
import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router'; // Используем Link для навигации

export interface BreadcrumbItem {
  label: string;
  href?: string; // Если href нет, значит это текущая страница (не ссылка)
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <MuiBreadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        // Последний элемент — это текущая страница (не ссылка)
        if (isLast || !item.href) {
          return (
            <Typography key={item.label} color="text.primary">
              {item.label}
            </Typography>
          );
        }

        // Остальные — рабочие ссылки через React Router
        return (
          <Link
            key={item.label}
            component={RouterLink}
            to={item.href}
            underline="hover"
            color="inherit"
          >
            {item.label}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
}
