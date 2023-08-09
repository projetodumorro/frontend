import React from 'react';
import './App.css';


import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre'
import Categoria from './components/categoria/Categoria';
import { AuthProvider } from './contexts/AuthContext';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import ListaItens from './components/itens/listaItens/ListaItens';
import FormularioItem from './components/itens/formularioItem/FormularioItem';
import DeletarItem from './components/itens/deletarItem/deletarItem';
import Perfil from './pages/perfil/Perfil';
import Navbar from './components/navBar/NavBar';

import Carrinho from './pages/Cart/Carrinho';
import Produtos from './pages/Produtos/Produtos';

function App() {
  return (
    <>
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categoria" element={<Categoria />} />

              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/itens" element={<ListaItens />} />
              <Route path="/cadastroItem" element={<FormularioItem />} />
              <Route path="/editarItem/:id" element={<FormularioItem />} />
              <Route path="/deletarItem/:id" element={<DeletarItem />} />
              <Route path='/perfil' element={<Perfil />} />

              <Route path='/produtos' element={<Produtos />} />
              <Route path='/carrinho' element={<Carrinho />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;