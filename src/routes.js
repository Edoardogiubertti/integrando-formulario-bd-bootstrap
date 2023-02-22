import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/global.css'
import Petshop from './pages/petshop/Petshop'
import Sidebar from './components/sidebar/Sidebar.js'
import Cadastro from './pages/cadastro/Cadastro';
import Checkout from './pages/checkout/Checkout'
import Home from './pages/home/Home';

import React from 'react'

const Rotas = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/petshop/:id' element={<Petshop/>} />
          <Route path='/cadastro/' element={<Cadastro/>} />
          <Route path='/checkout/' element={<Checkout/>} />
        </Routes>
      </Router>
      <Sidebar />
    </>
  )
}

export default Rotas