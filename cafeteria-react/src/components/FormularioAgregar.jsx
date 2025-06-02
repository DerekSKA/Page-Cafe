import { useState } from 'react';
import { saveProduct, updateProduct } from '../utils/storage';

function FormularioAgregar({ productToEdit, onFinish }) {
  const isEditing = !!productToEdit?.id;

  const [formData, setFormData] = useState(productToEdit || {
    id: Date.now(),
    nombre: '',
    precio: '',
    imagen: '',
  });

  const [errors, setErrors] = useState({
    nombre: false,
    precio: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpiar error al escribir
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación mejorada
    const newErrors = {
      nombre: !formData.nombre.trim(),
      precio: !formData.precio || isNaN(formData.precio)
    };

    if (newErrors.nombre || newErrors.precio) {
      setErrors(newErrors);
      return;
    }

    if (isEditing) {
      updateProduct(formData.id, formData);
    } else {
      saveProduct({ ...formData, id: Date.now() });
    }

    onFinish();
  };

  const handleCancel = () => {
    onFinish();
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <h3 style={titleStyle}>{isEditing ? 'Editar Producto' : 'Nuevo Producto'}</h3>

      <div style={inputContainerStyle}>
        <label style={labelStyle}>Nombre del café</label>
        <input
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Ej: Cappuccino"
          style={{ ...inputStyle, borderColor: errors.nombre ? '#e74c3c' : '#d4c9b8' }}
        />
        {errors.nombre && <span style={errorStyle}>Este campo es requerido</span>}
      </div>

      <div style={inputContainerStyle}>
        <label style={labelStyle}>Precio</label>
        <input
          name="precio"
          type="number"
          value={formData.precio}
          onChange={handleChange}
          placeholder="Ej: 3500"
          style={{ ...inputStyle, borderColor: errors.precio ? '#e74c3c' : '#d4c9b8' }}
        />
        {errors.precio && <span style={errorStyle}>Ingrese un precio válido</span>}
      </div>

      <div style={inputContainerStyle}>
        <label style={labelStyle}>URL de imagen</label>
        <input
          name="imagen"
          value={formData.imagen}
          onChange={handleChange}
          placeholder="https://ejemplo.com/imagen.jpg"
          style={inputStyle}
        />
      </div>

      <div style={buttonsContainerStyle}>
        <button 
          type="button" 
          onClick={handleCancel}
          style={cancelButtonStyle}
        >
          Cancelar
        </button>
        <button 
          type="submit" 
          style={buttonStyle}
        >
          {isEditing ? 'Actualizar' : 'Guardar'}
        </button>
      </div>
    </form>
  );
}

// Estilos mejorados
const formStyles = {
  border: '1px solid #e0d6cc',
  padding: '1.25rem',
  borderRadius: '10px',
  background: '#f9f7f4',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  width: '320px',
  margin: '0 auto',
  boxShadow: '0 2px 6px rgba(110, 80, 60, 0.08)'
};

const titleStyle = {
  color: '#5a3d2a',
  margin: '0 0 0.5rem 0',
  textAlign: 'center',
  fontSize: '1.2rem'
};

const inputContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem'
};

const labelStyle = {
  color: '#5a3d2a',
  fontSize: '0.9rem',
  fontWeight: '500'
};

const inputStyle = {
  padding: '0.6rem',
  fontSize: '0.95rem',
  border: '1px solid #d4c9b8',
  borderRadius: '5px',
  backgroundColor: '#fffdfa',
  width: '92%',
  transition: 'border-color 0.3s ease',
  ':focus': {
    outline: 'none',
    borderColor: '#a38b6d',
    boxShadow: '0 0 0 2px rgba(163, 139, 109, 0.2)'
  }
};

const errorStyle = {
  color: '#e74c3c',
  fontSize: '0.8rem',
  marginTop: '0.2rem'
};

const buttonStyle = {
  background: '#6F4E37',
  color: 'white',
  padding: '0.6rem',
  fontSize: '0.95rem',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  flex: 1,
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: '#5a3d2a'
  }
};

const cancelButtonStyle = {
  ...buttonStyle,
  background: '#d4b28c',
  color: '#5a3d2a',
  marginRight: '0.5rem',
  ':hover': {
    backgroundColor: '#c4a278'
  }
};

const buttonsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '0.5rem',
  gap: '0.75rem'
};

export default FormularioAgregar;