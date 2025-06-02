/**
 * Componente Contacto - Página de formulario de contacto
 * 
 * Propósito:
 * - Proporcionar un formulario funcional para que los clientes se comuniquen
 * - Incluye campos para nombre, email y botón de envío
 * - Validación básica de campos (type="email")
 */
function Contacto() {
  // TODO: Implementar manejo de estado del formulario
  // const [formData, setFormData] = useState({ nombre: '', email: '' });

  return (
    <div className="contacto-container">
      {/* Encabezado de la sección */}
      <h2 className="titulo-seccion">Contacto</h2>

      {/* Formulario con restricción de ancho para mejor legibilidad */}
      <form 
        style={{ 
          maxWidth: '500px',
          margin: '0 auto', // Centrado horizontal
          padding: '1.5rem',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
        aria-label="Formulario de contacto"
      >
        {/* Grupo de campo para nombre */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
            aria-required="true"
          />
        </div>

        {/* Grupo de campo para email */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>
            Email:
          </label>
          <input
            id="email"
            type="email"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
            aria-required="true"
            required
          />
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          style={{
            background: '#6F4E37',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            width: '100%',
            transition: 'background-color 0.3s ease',
            ':hover': {
              backgroundColor: '#5a3d2a'
            }
          }}
          aria-label="Enviar formulario de contacto"
        >
          Enviar Mensaje
        </button>
      </form>
    </div>
  );
}

export default Contacto;