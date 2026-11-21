// src/app/providers/AppProviders.tsx
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import { theme } from '@/shared/theme/theme';
import { store } from '@/app/store';
import { router } from '../router';

export function AppProviders() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}
