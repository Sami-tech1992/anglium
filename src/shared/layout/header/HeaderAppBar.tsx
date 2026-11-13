// src/shared/layout/header/HeaderAppBar.tsx
import type { ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';

interface HeaderAppBarProps {
  children: ReactNode;
}

export function HeaderAppBar({ children }: HeaderAppBarProps) {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        backgroundColor: 'background.paper',
        color: 'text.primary',
        boxShadow: 1,
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      {children}
    </AppBar>
  );
}
