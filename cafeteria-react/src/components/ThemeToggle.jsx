import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      style={{
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.5rem',
        padding: '0.5rem',
        color: darkMode ? 'var(--color-primary)' : 'var(--color-secondary)'
      }}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};