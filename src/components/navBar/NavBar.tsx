import { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { BsFillCartFill} from "react-icons/bs";
import { Select, Option } from "@material-tailwind/react";

function Navbar() {
  let navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("Usuário deslogado com sucesso");
    navigate("/login");
  }

  let navbarComponent;

  let navBarVisitante = (
    <>
      <Link to="/home" className="p-4 hover:underline text-xl py-4 flex">
        Home
      </Link>
      <Link to="/sobre" className="p-4 hover:underline text-xl py-4 flex">
        Sobre
      </Link>
      <Link to="/login" className="p-4 hover:underline text-xl py-4 flex">
        Login
      </Link>
    </>
  );

  let navbarCliente = (
    <>
    <Link to="/home" className="p-4 hover:underline text-xl py-4 flex">
        Home
      </Link>
      <Link to="/sobre" className="p-4 hover:underline text-xl py-4 flex">
        Sobre
      </Link>
      <Link to="/itens" className="p-4 hover:underline text-xl py-4 flex">
        Produtos e Serviços
      </Link>
      <Link
        to=""
        onClick={logout}
        className="p-4 hover:underline text-xl py-4 flex"
      >
        Sair
      </Link>
      {/* Cart button */}
      <Link to="/carrinho" className="p-2">
      <button className='bg-black text-white hidden md:flex items-center p-4 py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' />Carrinho
      </button>
      </Link>
    </>

  );
  
  let navbarAdm = (
    <>
      <Link to="/home" className="p-4 hover:underline text-xl py-4 flex">
        Home
      </Link>
      <Link to="/sobre" className="p-4 hover:underline text-xl py-4 flex">
        Sobre
      </Link>
      <Link to="/itens" className="p-4 hover:underline text-xl py-4 flex">
        Produtos e Serviços
      </Link>
      <li className="relative group">
        <Link
          to="/categoria"
          className="py-4 hover:underline text-xl py-4 flex"
        >
          Administrador
        </Link>

        <Select className="absolute hidden group-hover:block bg-orange-100 w-80">
          <Option>
            <Link to="/meusItens">Lista de Itens</Link>
          </Option>
          <Option>
            <Link to="/cadastroItem">Cadastrar Item</Link>
          </Option>
          <Option>
            <Link to="/categorias">Categoria</Link>
          </Option>
          <Option>
            <Link to="/cadastroCategoria">Cadastrar Categoria</Link>
          </Option>
        </Select>
      </li>
      <Link
        to=""
        onClick={logout}
        className="p-4 hover:underline text-xl py-4 flex"
      >
        Sair
      </Link>
      {/* Cart button */}
      
      <Link to="/carrinho" className="p-2">
      <button className='bg-black text-white hidden md:flex items-center p-4 py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' />Carrinho
      </button>
      </Link>
    </>
  );
  let navbarVendedor = (
    <>
      <Link to="/home" className="p-4 hover:underline text-xl py-4 flex">
        Home
      </Link>
      <Link to="/sobre" className="p-4 hover:underline text-xl py-4 flex">
        Sobre
      </Link>
      <Link to="/itens" className="p-4 hover:underline text-xl py-4 flex">
        Produtos e Serviços
      </Link>

      <li className="relative group">
        <Link
          to="/categoria"
          className="py-4 hover:underline text-xl py-4 flex"
        >
          Vendedor
        </Link>

        <Select className="absolute hidden group-hover:block bg-orange-100 w-80">
          <Option>
            <Link to="/meusItens">Meus Itens</Link>
          </Option>
          <Option>
            <Link to="/cadastroItem">Cadastrar Item</Link>
          </Option>
        </Select>
      </li>
      <Link
        to=""
        onClick={logout}
        className="p-4 hover:underline text-xl py-4 flex"
      >
        Sair
      </Link>
    </>
  );
  if (usuario.token !== "") {
    navbarComponent = (
      <>
        {usuario.tipo == "adm" ? navbarAdm : usuario.tipo == "vendedor" ? navbarVendedor : navbarCliente }
      
      </>
    );
  }else{
    navbarComponent = (
      navBarVisitante
    )
  }

  console.log(usuario.tipo == "vendedor")

  return (
    <>
      <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-[#]">
        {/* Left side */}
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
            <span className="font-bold text-orange-500">DM</span>
          </h1>
          <a href="tags/tag_base.asp">
            <div className="hidden lg:flex items-center bg-black text-white rounded-full p-1 text-[14px]">
              <p className="bg-orange-500 text-white rounded-full p-2">Du</p>
              <p className="p-2">Morro</p>
            </div>
          </a>
        </div>

        <ul className="hidden md:flex text-orange-500">

        {navbarComponent}
       
        </ul>
      </div>
    </>
  )
}

export default Navbar;
