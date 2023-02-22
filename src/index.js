import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css'
import Petshop from './pages/petshop/Petshop.js';
import Sidebar from './components/sidebar/Sidebar.js'
import Cadastro from './pages/cadastro/Cadastro';
import Checkout from './pages/checkout/Checkout'
import Home from './pages/home/Home';
import Map from './components/map/Map'
import Mapa from './components/mapa/Mapa';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar/>
    <Home/>
  </React.StrictMode>
);
