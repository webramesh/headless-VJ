'use client';
import { createContext, useContext } from 'react';

const OrdlistaContext = createContext();

export function OrdlistaProvider({ children, ordlista }) {
  return <OrdlistaContext.Provider value={ordlista}>{children}</OrdlistaContext.Provider>;
}

export function useOrdlista() {
  const context = useContext(OrdlistaContext);
  if (context === undefined) {
    throw new Error('useOrdlista must be used within an OrdlistaProvider');
  }
  return context;
}
