import { createTheme } from '@mui/material/styles';
import { LinkBehavior } from '@/shared/lib/LinkBehavior';

export const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    h1: { fontSize: '2.5rem', fontWeight: 500 },
    h2: { fontSize: '2rem', fontWeight: 500 },
    h3: { fontSize: '1.75rem', fontWeight: 500 },
    h4: { fontSize: '1.5rem', fontWeight: 500 },
    h5: { fontSize: '1.25rem', fontWeight: 500 },
    h6: { fontSize: '1rem', fontWeight: 500 },
  },

  components: {
    // 1. Кнопки: убираем CAPS LOCK, тень и настраиваем ссылки
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        component: LinkBehavior, // <-- Заменили MuiButtonBase на MuiButton
        nativeButton: false,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          '&.active': {
            // Стиль для активной кнопки-ссылки (когда она ведет на текущую страницу)
            backgroundColor: 'action.selected',
            fontWeight: 'bold',
          },
        },
      },
    },
    // 2. Текстовые поля по умолчанию
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
    },
    // 3. Поля ввода скругляем углы в тон теме
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    // 4. Убираем тень у карточек
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    // 5. Ссылки: подчеркивание при наведении, адаптер и стиль активной ссылки
    MuiLink: {
      defaultProps: {
        underline: 'hover',
        component: LinkBehavior, // <-- Адаптер для ссылок
      },
      styleOverrides: {
        root: {
          '&.active': {
            fontWeight: 'bold',
            color: 'primary.main',
          },
        },
      },
    },
    // 6. Скелетоны: задаем цвет из палитры, чтобы были видны в обеих темах
    MuiSkeleton: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.action.hover,
        }),
      },
    },
  },

  shape: {
    borderRadius: 8,
  },

  colorSchemes: {
    light: {
      palette: {
        contrastThreshold: 4.5,
        primary: { main: '#1A3A6B', contrastText: '#FFF' },
        secondary: { main: '#6B2FA0', contrastText: '#FFF' },
        background: {
          default: '#F7F9FC',
          paper: '#FFF',
        },
        success: { main: '#1B7A3D', contrastText: '#FFFFFF' },
        error: { main: '#B3261E', contrastText: '#FFFFFF' },
        text: {
          primary: '#1A1A1A',
          secondary: '#4A4A4A',
        },
      },
    },
    dark: {
      palette: {
        contrastThreshold: 4.5,
        primary: { main: '#8AB4F8', contrastText: '#121212' },
        secondary: { main: '#D0A2F7', contrastText: '#121212' },
        background: {
          default: '#121212',
          paper: '#1E1E1E',
        },
        success: { main: '#81C995', contrastText: '#121212' },
        error: { main: '#F28B82', contrastText: '#121212' },
        text: {
          primary: '#E8EAED',
          secondary: '#B0B3B8',
        },
      },
    },
  },
});
