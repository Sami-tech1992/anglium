import { createContext, useContext } from 'react';

interface MobileMenuContextValue {
  closeMenu: () => void;
}

export const MobileMenuContext = createContext<MobileMenuContextValue | null>(
  null
);

export function useMobileMenu() {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error('useMobileMenu must be used within MobileMenuProvider');
  }
  return context;
}
