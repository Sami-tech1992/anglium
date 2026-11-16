import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

interface SpinnerProps {
  variant?: 'block' | 'inline';
  size?: number;
  /** Подпись для скринридеров (по умолчанию "Загрузка...") */
  label?: string;
}

export function Spinner({
  variant = 'inline',
  size = 24,
  label = 'Загрузка...',
}: SpinnerProps) {
  // Скрытый текст, который прочитает скринридер
  const hiddenLabel = (
    <Typography
      component="span"
      sx={{
        position: 'absolute',
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: 0,
      }}
    >
      {label}
    </Typography>
  );

  if (variant === 'block') {
    return (
      <Box
        role="status"
        aria-live="polite"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 8,
          position: 'relative',
        }}
      >
        {hiddenLabel}
        <CircularProgress size={size} />
      </Box>
    );
  }

  return (
    <Box
      component="span"
      role="status"
      aria-live="polite"
      sx={{ display: 'inline-flex', position: 'relative' }}
    >
      {hiddenLabel}
      <CircularProgress size={size} color="inherit" />
    </Box>
  );
}
