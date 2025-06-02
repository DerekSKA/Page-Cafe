import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle'; // Línea añadida

/**
 * Componente Navbar - Barra de navegación superior de la aplicación
 * 
 * Funcionalidades:
 * - Proporciona navegación entre las diferentes páginas (Inicio, Menú, Contacto)
 * - Mantiene un estilo consistente en toda la aplicación
 * - Utiliza React Router para navegación sin recargas (SPA)
 * 
 * Estructura:
 * - Logo/icono a la izquierda (enlace a página principal)
 * - Menú de navegación a la derecha
 */


function Navbar() {
    // Debug: Verifica que el componente se renderiza correctamente
    console.log("Navbar cargado");
    
    return (
        <nav style={{
            background: '#6F4E37',  // Color café característico
            padding: '1rem',       // Espaciado interno
            color: 'white',        // Color de texto
            display: 'flex',       // Layout flexible
            justifyContent: 'space-between'  // Distribución del espacio
        }}>
            {/* Logo/Nombre de la aplicación (enlace a inicio) */}
            <Link 
                to="/" 
                style={{ 
                    color: 'white', 
                    textDecoration: 'none'  // Elimina subrayado del enlace
                }}
                aria-label="Ir a página de inicio"
            >
                <h2>☕ Cafetería React</h2>  {/* Icono + nombre */}
            </Link>

            {/* Menú de navegación principal */}
            <div>
                <Link to="/" style={linkStyle} aria-label="Ir a inicio">Inicio</Link>
                <Link to="/menu" style={linkStyle} aria-label="Ir a menú">Menú</Link>
                <Link to="/contacto" style={linkStyle} aria-label="Ir a contacto">Contacto</Link>
            </div>
        </nav>
    );
}

/**
 * Objeto de estilos para los enlaces de navegación
 * @type {Object}
 * @property {string} color - Color del texto (blanco)
 * @property {string} marginLeft - Espaciado entre enlaces (1rem)
 * @property {string} textDecoration - Elimina subrayado de los enlaces
 */
const linkStyle = {
    color: 'white',
    marginLeft: '1rem',
    textDecoration: 'none'
};

export default Navbar;