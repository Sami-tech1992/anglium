import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router'; // <-- Импорт Outlet
import { Header } from './header/Header';
import { Footer } from './footer/Footer';
import { NotificationsHost } from '@/features/notifications';

export function PageLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Toolbar />
      <Box component="main" sx={{ flex: 1, py: 3 }}>
        <Container maxWidth="lg" sx={{ mx: 'auto' }}>
          <Outlet /> {/* <-- Здесь будут рендериться дочерние страницы */}
        </Container>
      </Box>
      <Footer />
      <NotificationsHost />
    </Box>
  );
}
