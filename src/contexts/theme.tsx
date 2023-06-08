import { createContext, useEffect, useState } from 'react';
import type { Dispatch, SetStateAction, ReactNode } from 'react';

type Theme = 'light' | 'dark';

type ThemeContext = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>> | null;
};

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeContext = createContext<ThemeContext>({
  theme: 'light',
  setTheme: null,
});

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');
  const getInjectedThemeOrDefault = (): Theme => {
    const injectedTheme = document.documentElement.getAttribute('data-theme');
    return injectedTheme === 'dark' ? 'dark' : 'light';
  };

  useEffect(() => {
    setTheme(getInjectedThemeOrDefault());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export type { Theme };
export { ThemeContext, ThemeProvider };
