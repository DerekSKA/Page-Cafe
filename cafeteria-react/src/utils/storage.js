/**
 * Utilidades para manejo de productos en localStorage
 * 
 * Implementa operaciones CRUD básicas:
 * - Create (saveProduct)
 * - Read (getProducts)
 * - Update (updateProduct)
 * - Delete (deleteProduct)
 * 
 * Los datos se guardan bajo la clave 'cafe-products' como array JSON
 */

/**
 * Obtiene todos los productos almacenados
 * @returns {Array} Lista de productos (array vacío si no hay datos)
 */
export const getProducts = () => {
  try {
    const products = localStorage.getItem('cafe-products');
    return products ? JSON.parse(products) : [];
  } catch (error) {
    console.error('Error al leer productos:', error);
    return []; // Devuelve array vacío si hay error de parseo
  }
};

/**
 * Guarda un nuevo producto
 * @param {Object} product - Producto a guardar (debe tener id único)
 */
export const saveProduct = (product) => {
  const products = getProducts();
  products.push(product);
  localStorage.setItem('cafe-products', JSON.stringify(products));
};

/**
 * Actualiza un producto existente
 * @param {string|number} id - ID del producto a actualizar
 * @param {Object} updatedProduct - Nuevos datos del producto
 */
export const updateProduct = (id, updatedProduct) => {
  let products = getProducts();
  products = products.map(p => 
    p.id === id ? { ...updatedProduct, id } : p
  );
  localStorage.setItem('cafe-products', JSON.stringify(products));
};

/**
 * Elimina un producto
 * @param {string|number} id - ID del producto a eliminar
 */
export const deleteProduct = (id) => {
  let products = getProducts();
  products = products.filter(p => p.id !== id);
  localStorage.setItem('cafe-products', JSON.stringify(products));
};