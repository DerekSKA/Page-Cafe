function Inicio() {
  return (
    <div className="pagina-inicio">
      {/* Título principal de la aplicación */}
      <h1>Bienvenido a Cafetería React</h1>
      
      {/* Imagen principal con propiedades responsive:
          - Ancho relativo (25% del contenedor)
          - Altura máxima fija
          - objectFit para mantener proporciones */}
      <img 
        src="/public/images/cafe-logo.png" 
        alt="Taza de café de especialidad con granos alrededor" 
        style={{ 
          width: '25%', 
          minWidth: '250px', // Added for better mobile responsiveness
          maxHeight: '400px', 
          objectFit: 'cover',
          borderRadius: '8px', // Added for better aesthetics
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)' // Added for depth
        }}
        className="imagen-principal" // Added for additional CSS styling
      />
      
      {/* Texto descriptivo de la aplicación */}
      <p className="descripcion">
        Gestiona tu menú de cafés de forma sencilla e intuitiva
      </p>
    </div>
  );
}

export default Inicio;