'use client';
import { createContext, useState } from 'react';

export const MenuStatus = createContext(null);

function MenuContext({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <MenuStatus.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </MenuStatus.Provider>
  );
}

export default MenuContext;
