import { PropsWithChildren, createContext, useState } from 'react';

type themes = 'dark' | 'light';
type ThemeContextType = {
  theme: themes;
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);
const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<themes>('light');
  document.documentElement.dataset.theme = theme;
  const toggleTheme = () => {
    document.documentElement.dataset.theme = theme;
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
