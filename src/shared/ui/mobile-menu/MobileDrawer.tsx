// src/shared/ui/mobile-menu/MobileDrawer.tsx
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { DrawerHeader } from './DrawerHeader';
import { DrawerNavList } from './DrawerNavList';
import { DrawerFooter } from './DrawerFooter';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: 280,
            backgroundColor: 'background.paper',
            backgroundImage: 'none',
            boxShadow: '-4px 0 24px rgba(0,0,0,0.1)',
          },
        },
      }}
    >
      <DrawerHeader />
      <Divider />
      <DrawerNavList onItemClick={onClose} />
      <DrawerFooter />
    </Drawer>
  );
}
