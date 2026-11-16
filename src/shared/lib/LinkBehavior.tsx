// src/shared/lib/LinkBehavior.tsx
import { forwardRef } from 'react';
import { NavLink, type NavLinkProps } from 'react-router';

// Тип, который объединяет пропсы MUI (href) и React Router (to)
type LinkBehaviorProps = Omit<NavLinkProps, 'to'> & {
  href: NavLinkProps['to'];
};

export const LinkBehavior = forwardRef<HTMLAnchorElement, LinkBehaviorProps>(
  function LinkBehavior(props, ref) {
    const { href, ...other } = props;
    // Подменяем href на to для React Router
    return <NavLink ref={ref} to={href} {...other} />;
  }
);
