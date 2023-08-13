import './App.css';
import Navbar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Perfil from './pages/perfil/Perfil';
import Cadastro from './pages/cadastro/Cadastro';
import Categoria from './components/categoria/Categoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import ListaItens from './components/itens/listaItens/ListaItensProdCliente';
import ListaItensProdCliente from './components/itens/listaItens/ListaItensProdCliente';
import ListaItensProdVendedor from './components/itens/listaItens/ListaItensProdVendedor';
import DeletarItem from './components/itens/deletarItem/DeletarItem';
import MeusItens from './components/itens/listaItens/MeusItens'
import FormularioItem from './components/itens/formularioItem/FormularioItem';
import Carrinho from './pages/carrinho/Carrinho';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path='/perfil' element={<Perfil />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/carrinho' element={<Carrinho />} />

              <Route path="/categoria" element={<Categoria />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />

              <Route path="/itens" element={<ListaItens />} />
              <Route path='/itensCliente' element={< ListaItensProdCliente />} />
              <Route path='/itensVendedor' element={< ListaItensProdVendedor />} />
              <Route path='/meusItens' element={<MeusItens />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/cadastroItem" element={<FormularioItem />} />
              <Route path="/editarItem/:id" element={<FormularioItem />} />
              <Route path="/deletarItem/:id" element={<DeletarItem />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;