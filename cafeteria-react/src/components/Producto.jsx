import { deleteProduct } from '../utils/storage';

/**
 * Componente que muestra una tarjeta individual de producto con opciones para editar y eliminar.
 * 
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.producto - El objeto del producto a mostrar.
 * @param {Function} props.onEdit - Función que se ejecuta al hacer clic en editar.
 */
function Producto({ producto, onEdit }) {
  /**
   * Maneja la eliminación del producto después de confirmación.
   * Elimina el producto del almacenamiento y recarga la página para actualizar la lista.
   * 
   * @todo Implementar actualización de estado sin recargar la página completa
   */
  const handleDelete = () => {
    if (window.confirm('¿Eliminar este producto?')) {
      deleteProduct(producto.id);
      window.location.reload(); // Solución temporal - idealmente usar actualización de estado
    }
  };

  return (
    <div className="producto-card">
      {/* Imagen del producto con texto alternativo */}
      <img src={producto.imagen} alt={producto.nombre} />
      
      {/* Nombre del producto */}
      <h3>{producto.nombre}</h3>
      
      {/* Precio del producto formateado */}
      <p>Precio: ${producto.precio}</p>
      
      {/* Contenedor de botones de acciones */}
      <div className="producto-actions">
        {/* Botón para editar el producto */}
        <button onClick={() => onEdit(producto)}>Editar</button>
        
        {/* Botón para eliminar el producto con confirmación */}
        <button onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  );
}

export default Producto;