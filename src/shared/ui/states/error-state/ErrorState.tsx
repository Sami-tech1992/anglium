import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';

interface ErrorStateProps {
  title?: ReactNode;
  message?: ReactNode;
  onRetry?: () => void;
}

export function ErrorState({
  title = 'Что-то пошло не так',
  message = 'Не удалось загрузить данные. Попробуйте позже.',
  onRetry,
}: ErrorStateProps) {
  return (
    <Box sx={{ py: 4, px: 2, display: 'flex', justifyContent: 'center' }}>
      <Alert
        severity="error"
        role="alert"
        sx={{ maxWidth: 500, width: '100%' }}
        action={
          onRetry && (
            <Button color="inherit" size="small" onClick={onRetry}>
              Повторить
            </Button>
          )
        }
      >
        <AlertTitle>{title}</AlertTitle>
        {message}
      </Alert>
    </Box>
  );
}
