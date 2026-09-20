import { useState, useEffect } from 'react';

/**
 * Custom hook to manage Dark and Light theme modes.
 * Syncs with localStorage and document.documentElement[data-theme].
 */
export default function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Check saved local storage first
    try {
      const savedTheme = localStorage.getItem('aditya-portfolio-theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    } catch {
      // Fallback if localStorage is disabled
    }

    // Default to dark theme for developer/cyberpunk portfolio aesthetic
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;

    try {
      localStorage.setItem('aditya-portfolio-theme', theme);
    } catch {
      // Ignore if localStorage is unavailable
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
