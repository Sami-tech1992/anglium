import IconButton from '@mui/material/IconButton';
import { useColorScheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export function ThemeToggle() {
  const { mode, setMode } = useColorScheme();

  if (!mode) return null;

  const isDark = mode === 'dark';

  const toggleMode = () => {
    setMode(isDark ? 'light' : 'dark');
  };

  return (
    <IconButton
      onClick={toggleMode}
      color="inherit"
      aria-label="Переключить тему"
    >
      {isDark ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
