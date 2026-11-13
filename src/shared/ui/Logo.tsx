import Typography from '@mui/material/Typography';
import type { SxProps, Theme } from '@mui/material/styles';

interface LogoProps {
  variant?: 'h5' | 'h6'; // Размер заголовка
  sx?: SxProps<Theme>; // Дополнительные стили (опционально)
}

export function Logo({ variant = 'h6', sx }: LogoProps) {
  return (
    <Typography
      variant={variant}
      component="div"
      sx={{ fontWeight: 700, color: 'primary.main', ...sx }}
    >
      Англиум
    </Typography>
  );
}
