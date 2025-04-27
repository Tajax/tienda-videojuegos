import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <h2>Tienda Gamer</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/carrito">Carrito</Link></li>
      </ul>
    </nav>
  );
}

// Home Component
function Home() {
  return (
    <div className="home">
      <h1>Bienvenido a Tienda Gamer</h1>
      <p>Explora los mejores videojuegos del momento</p>
    </div>
  );
}

// JuegoCard Component
function JuegoCard({ juego }) {
  return (
    <div className="juego-card">
      <img src={juego.background_image} alt={juego.name} />
      <h3>{juego.name}</h3>
      <Link to={`/juego/${juego.id}`}>Ver Detalles</Link>
    </div>
  );
}

// Catalogo Component
function Catalogo() {
  const [juegos] = useState([
    {
      id: 1,
      name: 'The Witcher 3',
      background_image: 'https://via.placeholder.com/300x200.png?text=The+Witcher+3',
    },
    {
      id: 2,
      name: 'Cyberpunk 2077',
      background_image: 'https://via.placeholder.com/300x200.png?text=Cyberpunk+2077',
    },
    {
      id: 3,
      name: 'Red Dead Redemption 2',
      background_image: 'https://via.placeholder.com/300x200.png?text=Red+Dead+Redemption+2',
    }
  ]);

  return (
    <div>
      <h2>Catálogo de Juegos</h2>
      <div className="juegos-grid">
        {juegos.map(juego => (
          <JuegoCard key={juego.id} juego={juego} />
        ))}
      </div>
    </div>
  );
}

// JuegoDetalle Component
function JuegoDetalle() {
  const { id } = useParams();
  return (
    <div className="juego-detalle">
      <h2>Detalle del Juego ID: {id}</h2>
      <p>Descripción del juego aquí.</p>
    </div>
  );
}

// Carrito Component
function Carrito() {
  return (
    <div>
      <h2>Tu Carrito</h2>
      <p>Aún no has añadido juegos al carrito.</p>
    </div>
  );
}

// App Component
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/juego/:id" element={<JuegoDetalle />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </Router>
  );
}

export default App;