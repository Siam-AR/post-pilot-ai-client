"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const THEME_STORAGE_KEY = 'postPilotAITheme';

export type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  theme: ThemeMode;
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const getInitialTheme = (): ThemeMode => 'light';

const getStoredTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'light';

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  const systemPrefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;

  return savedTheme === 'dark' || savedTheme === 'light'
    ? savedTheme
    : systemPrefersDark
    ? 'dark'
    : 'light';
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeMode>(getInitialTheme);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setThemeState(getStoredTheme());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    const root = document.documentElement;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, hydrated]);

  const toggleTheme = () => {
    setThemeState((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (nextTheme: ThemeMode) => {
    setThemeState(nextTheme);
  };

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      isDarkMode: theme === 'dark',
      toggleTheme,
      setTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
