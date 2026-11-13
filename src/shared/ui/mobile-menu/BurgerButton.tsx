// src/shared/ui/mobile-menu/BurgerButton.tsx
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface BurgerButtonProps {
  onClick: () => void;
}

export function BurgerButton({ onClick }: BurgerButtonProps) {
  return (
    <IconButton color="inherit" aria-label="открыть меню" onClick={onClick}>
      <MenuIcon />
    </IconButton>
  );
}
