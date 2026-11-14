// src/app/DevDemo.tsx
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {
  Spinner,
  CardSkeleton,
  TextSkeleton,
  EmptyState,
  ErrorState,
} from '@/shared/ui';

export function DevDemo() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Демонстрация состояний (временная)
      </Typography>

      {/* Переключатель загрузка / загружено */}
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Button
          variant={isLoading ? 'contained' : 'outlined'}
          onClick={() => setIsLoading(true)}
        >
          Загрузка
        </Button>
        <Button
          variant={!isLoading ? 'contained' : 'outlined'}
          onClick={() => setIsLoading(false)}
        >
          Загружено
        </Button>
      </Stack>

      <Divider sx={{ mb: 4 }} />

      {/* 1. Spinner inline */}
      <Typography variant="h6" gutterBottom>
        1. Spinner (inline)
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Button variant="contained" disabled>
          <Spinner variant="inline" size={20} />
          <Box component="span" sx={{ ml: 1 }}>
            Загрузка...
          </Box>
        </Button>
      </Box>

      {/* 2. Spinner block */}
      <Typography variant="h6" gutterBottom>
        2. Spinner (block)
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Spinner variant="block" size={48} />
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* 3. CardSkeleton */}
      <Typography variant="h6" gutterBottom>
        3. CardSkeleton
      </Typography>
      <Box sx={{ mb: 3 }}>
        {isLoading ? (
          <CardSkeleton count={4} />
        ) : (
          <Typography color="text.secondary">
            Карточки загружены (здесь будут реальные карточки)
          </Typography>
        )}
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* 4. TextSkeleton */}
      <Typography variant="h6" gutterBottom>
        4. TextSkeleton
      </Typography>
      <Box sx={{ mb: 3 }}>
        {isLoading ? (
          <TextSkeleton lines={5} />
        ) : (
          <Typography color="text.secondary">
            Текст загружен (здесь будет реальный текст)
          </Typography>
        )}
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* 5. EmptyState */}
      <Typography variant="h6" gutterBottom>
        5. EmptyState
      </Typography>
      <Box sx={{ mb: 3 }}>
        {!isLoading && (
          <EmptyState
            title="Курсов пока нет"
            description="Попробуйте изменить фильтры или загляните позже."
            actionLabel="Сбросить фильтры"
            onAction={() => alert('Фильтры сброшены (демо)')}
          />
        )}
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* 6. ErrorState */}
      <Typography variant="h6" gutterBottom>
        6. ErrorState
      </Typography>
      <Box sx={{ mb: 3 }}>
        <ErrorState
          message="Не удалось загрузить данные. Проверьте соединение."
          onRetry={() => alert('Повторная попытка (демо)')}
        />
      </Box>
    </Box>
  );
}
