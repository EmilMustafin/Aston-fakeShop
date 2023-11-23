import { useContext } from 'react';

import { ThemeContext } from '../providers/ThemeProvider';

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useThemeContext must be used inside the ThemeProvider');
  }

  return context;
};
export { useThemeContext };
