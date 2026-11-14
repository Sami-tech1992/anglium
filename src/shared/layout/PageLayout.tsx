// src/shared/layout/PageLayout.tsx
import type { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Header } from './header/Header';
import { Footer } from './footer/Footer';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      {/* Отступ под фиксированный AppBar (решение из документации MUI) */}
      <Toolbar />

      {/* Основная область, которая растягивается */}
      <Box component="main" sx={{ flex: 1, py: 3 }}>
        {/* Container ограничивает ширину контента на больших экранах */}
        <Container maxWidth="lg" sx={{ mx: 'auto' }}>
          {children}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
