import { useContext } from 'react';
import { Sun, Moon } from '@phosphor-icons/react';

import { Theme, ThemeContext } from '../contexts/theme';

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const transitionTheme = (targetTheme: Theme) => {
    if (!setTheme) {
      throw new Error(
        'ThemeContext does not exist outside the ThemeProvider context.'
      );
    }

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);
    setTheme(targetTheme);
  };

  const toggleTheme = (currentTheme: Theme) => {
    switch (currentTheme) {
      case 'light':
        transitionTheme('dark');
        break;
      case 'dark':
        transitionTheme('light');
        break;
      default:
        throw new Error('Unknown theme');
    }
  };

  return theme === 'dark' ? (
    <Sun className="clickable" onClick={() => toggleTheme(theme)} />
  ) : (
    <Moon className="clickable" onClick={() => toggleTheme(theme)} />
  );
}

export default ThemeToggle;
