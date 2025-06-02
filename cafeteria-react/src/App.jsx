import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext'; // Línea añadida


// Componentes comunes
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Páginas
import Inicio from './pages/Inicio';       // Página de bienvenida
import Menu from './pages/Menu';           // Vista CRUD de productos
import Contacto from './pages/Contacto';   // Formulario de contacto

function App() {
    console.log("App cargado");
    return (
        <ThemeProvider> {/* Línea añadida envolviendo todo */}
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <main>
                        <Routes>
                            <Route path="/" element={<Inicio />} />
                            <Route path="/menu" element={<Menu />} />
                            <Route path="/contacto" element={<Contacto />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </ThemeProvider> // Línea añadida
    );
}

export default App;


