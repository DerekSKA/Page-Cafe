/**
 * Componente Footer - Pie de página de la aplicación
 * 
 * Características:
 * - Se muestra en todas las páginas de la aplicación
 * - Posicionamiento fijo en la parte inferior
 * - Estilo consistente con la paleta de colores de la aplicación
 * - Texto de copyright básico
 * 
 * Notas técnicas:
 * - Usa `marginTop: 'auto'` para pegarse al fondo cuando el contenido es escaso
 * - Estilos en línea para mantener la coherencia visual con el Navbar
 */
function Footer() {
  return (
    <footer 
      style={{
        background: '#6F4E37', // Color café que coincide con la barra de navegación
        color: 'white',        // Texto blanco para contraste
        textAlign: 'center',   // Centrado del contenido
        padding: '1rem',       // Espaciado interno
        marginTop: 'auto',     // Empuja el footer hacia abajo
        width: '100%',         // Ocupa todo el ancho
        boxSizing: 'border-box' // Incluye padding en el ancho total
      }}
      aria-label="Pie de página"
    >
      {/* Texto de copyright con año dinámico podría ser {new Date().getFullYear()} */}
      <p>© 2025 Cafetería React - Todos los derechos reservados</p>
    </footer>
  );
}

export default Footer;