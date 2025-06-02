import { useState } from 'react';
import { getProducts } from '../utils/storage';                       // Funciones CRUD para productos
import Producto from '../components/Producto.jsx';                    // Componente de tarjeta de producto
import FormularioAgregar from '../components/FormularioAgregar.jsx';  // Formulario reusable



function Menu() {
  // Estado para la lista de productos (inicializado desde localStorage)
  const [products, setProducts] = useState(getProducts());
  
  // Estado para controlar qué producto se está editando (null = no hay edición)
  const [editingProduct, setEditingProduct] = useState(null);

  return (
    <div>
      <h2>Administrar Menú</h2>

      {/* Botón para iniciar la creación de un nuevo producto */}
      <button 
        onClick={() => setEditingProduct({})}
        aria-label="Agregar nuevo producto"
      >
        + Nuevo Producto
      </button>

      {/* Muestra el formulario solo cuando editingProduct tiene valor */}
      {editingProduct && (
        <FormularioAgregar 
          productToEdit={editingProduct}  // Objeto producto para editar (o vacío para crear)
          onFinish={() => {
            setEditingProduct(null);     // Cierra el formulario
            setProducts(getProducts());  // Actualiza la lista desde localStorage
          }}
        />
      )}

      {/* Grid responsivo de productos */}
      <div className="productos-grid">
        {products.map(p => (
          <Producto 
            key={p.id}                   // Identificador único para React
            producto={p}                  // Datos del producto
            onEdit={setEditingProduct}    // Función para iniciar edición
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;