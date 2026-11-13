// src/shared/layout/header/HeaderToolbar.tsx
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import { Logo } from '../../ui/Logo';
import { NavMenu } from '../../ui/NavMenu';
import { HeaderActions } from '../../ui/HeaderActions';
import { MobileMenu } from '../../ui/mobile-menu/MobileMenu';

export function HeaderToolbar() {
  return (
    <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
      {/* Левая часть (Логотип) */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        <Logo />
      </Box>

      {/* Центральная часть (Меню) */}
      <NavMenu />

      {/* Правая часть (Действия) */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        {/* Бургер для мобильных (показываем только на xs/sm) */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
          <MobileMenu />
        </Box>
        <HeaderActions />
      </Box>
    </Toolbar>
  );
}
