import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';                       // Componente raíz de la aplicación
import './index.css';                          // Estilos globales CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);