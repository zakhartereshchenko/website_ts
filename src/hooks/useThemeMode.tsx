import { createContext, useContext, useState, useMemo, useCallback, type ReactNode } from 'react';
import { ThemeMode } from '../types';

interface ThemeModeContextValue {
  mode: ThemeMode;
  toggleMode: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);

export const ThemeModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode') as ThemeMode;
    const initialMode = saved || ThemeMode.Dark;
    document.documentElement.setAttribute('data-theme', initialMode);
    return initialMode;
  });

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next = prev === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
      localStorage.setItem('theme-mode', next);
      document.documentElement.setAttribute('data-theme', next);
      return next;
    });
  }, []);

  const value = useMemo(() => ({ mode, toggleMode }), [mode, toggleMode]);

  return (
    <ThemeModeContext.Provider value={value}>
        {children}
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeModeProvider');
  }
  return context;
};