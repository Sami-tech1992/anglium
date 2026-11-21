// src/shared/ui/ThemeToggle.tsx
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Skeleton from '@mui/material/Skeleton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { useColorScheme } from '@mui/material/styles';

export function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  // До загрузки mode = undefined. Показываем заглушку того же размера,
  // чтобы избежать сдвига макета и «мигания» неправильной иконкой.
  if (!mode) {
    return (
      <IconButton disabled aria-label="Загрузка переключателя темы">
        <Skeleton variant="circular" width={24} height={24} />
      </IconButton>
    );
  }

  const nextMode =
    mode === 'light' ? 'dark' : mode === 'dark' ? 'system' : 'light';

  const getContent = () => {
    if (mode === 'light') {
      return {
        icon: <LightModeIcon />,
        label: 'Светлая тема. Нажмите, чтобы включить тёмную тему.',
      };
    }
    if (mode === 'dark') {
      return {
        icon: <DarkModeIcon />,
        label: 'Тёмная тема. Нажмите, чтобы включить системную тему.',
      };
    }
    return {
      icon: <SettingsBrightnessIcon />,
      label: 'Системная тема. Нажмите, чтобы включить светлую тему.',
    };
  };

  const { icon, label } = getContent();

  return (
    <Tooltip title={label}>
      <IconButton
        onClick={() => setMode(nextMode)}
        color="inherit"
        aria-label={label}
        sx={{
          '&:hover': { backgroundColor: 'action.hover' },
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: 2,
          },
        }}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}
