import type { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../../shared/theme/theme';

interface AppProvidersProps {
  children: ReactNode;
}

/**
 * Компонент-обертка для всех глобальных провайдеров приложения.
 * Сюда в будущем можно добавлять Router, Redux Provider, QueryClientProvider и т.д.
 */
export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
