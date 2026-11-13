// src/shared/layout/footer/FooterCopyright.tsx
import Typography from '@mui/material/Typography';

export function FooterCopyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} Англиум — школа английского языка
    </Typography>
  );
}
