import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const [lang, setLang]   = useState('en');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  const toggleLang  = () => setLang(l => l === 'en' ? 'ar' : 'en');

  return (
    <AppContext.Provider value={{ theme, lang, toggleTheme, toggleLang }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
