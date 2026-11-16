// src/shared/ui/mobile-menu/MobileMenu.tsx
import { useState } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { BurgerButton } from './BurgerButton';
import { MobileDrawer } from './MobileDrawer';
import { MobileMenuContext } from './MobileMenuContext';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isMobile) return null;

  const closeMenu = () => setOpen(false);

  return (
    <>
      <MobileMenuContext.Provider value={{ closeMenu }}>
        <BurgerButton onClick={() => setOpen(true)} />
        <MobileDrawer open={open} onClose={() => setOpen(false)} />
      </MobileMenuContext.Provider>
    </>
  );
}
