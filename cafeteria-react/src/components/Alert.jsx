import { useEffect } from 'react';

/**
 * Componente Alert - Muestra mensajes temporales de notificación
 * 
 * Props:
 * @param {string} message - Texto del mensaje a mostrar
 * @param {string} [type='success'] - Tipo de alerta ('success' o 'error')
 * @param {Function} onClose - Callback que se ejecuta al cerrar la alerta
 * 
 * Comportamiento:
 * - Se cierra automáticamente después de 3 segundos
 * - Limpia el timer cuando el componente se desmonta
 * - Estilos dinámicos según el tipo de alerta
 */
function Alert({ message, type = 'success', onClose }) {
  /**
   * Efecto para manejar el cierre automático
   * Configura un temporizador que ejecuta onClose después de 3000ms
   * Limpia el temporizador si el componente se desmonta antes
   */
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer); // Cleanup al desmontar
  }, [onClose]); // Solo se re-ejecuta si onClose cambia

  /**
   * Estilos dinámicos basados en el tipo de alerta
   * - Error: Fondo rojo claro/texto rojo oscuro
   * - Success: Fondo verde claro/texto verde oscuro
   */
  const alertStyles = {
    padding: '1rem',
    margin: '1rem 0',
    background: type === 'error' ? '#ffebee' : '#e8f5e9',
    color: type === 'error' ? '#c62828' : '#2e7d32',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Added for better visibility
    fontWeight: '500' // Improved readability
  };

  return (
    <div 
      style={alertStyles}
      role="alert" // Mejora accesibilidad
      aria-live="polite" // Notifica a screen readers
    >
      {message}
    </div>
  );
}

export default Alert;