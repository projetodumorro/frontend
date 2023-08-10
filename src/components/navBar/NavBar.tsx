
import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill,  } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
import { Select, Option } from "@material-tailwind/react";
import {UserCircleIcon} from '@heroicons/react/24/solid'
import { AuthContext } from '../../contexts/AuthContext'


const Navbar = () => {
const [nav, setNav] = useState(false)
const {usuario, handleLogout} = useContext(AuthContext);

let navigate = useNavigate()

const handleNav = () => {
  setNav(!nav);
};
function logout() {
  handleLogout()
  alert('Usuário deslogado com sucesso')
  navigate('/login')
}



  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 bg-[#]'>
      {/* Left side */}
      <div className='flex items-center'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          <span className='font-bold text-orange-500'>DM</span>
        </h1>
        <a href="tags/tag_base.asp">

        <div className='hidden lg:flex items-center bg-black text-white rounded-full p-1 text-[14px]'>
          <p className='bg-orange-500 text-white rounded-full p-2'>Du</p>
          <p className='p-2'>Morro</p>
           </div>
           </a>
      </div>

      {/* Search Input 
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Procurar Produtos'
        />
      </div>*/}
      
      <ul className='hidden md:flex text-orange-500'>
        <Link to='/home' className='p-4 hover:underline text-xl py-4 flex'>Home</Link>
        <Link to='/categoria' className='p-4 hover:underline text-xl py-4 flex'>Produtos & Serviços</Link>
        <Link to='/sobre' className='p-4 hover:underline text-xl py-4 flex'>Sobre</Link>
        <Link to="/login" className='p-4 text-xl py-4 flex'>Login</Link>

        
      

        

        <li className='relative group'>
    <Link to='/categoria' className='py-4 hover:underline text-xl py-4 flex'>Vendedor</Link>
  
    <ul className='absolute hidden group-hover:block bg-orange-100 w-80'>
      
      <li><Link to='/meusItens'>Meus Itens</Link></li>
      <li><Link to='/cadastroItem'>Cadastrar Produtos</Link></li>
      <li><Link to='/cadastroCategoria'>Cadastrar Categoria</Link></li>
      <li><Link to='/categorias'>Editar Categoria</Link></li>
      
    </ul>
  </li>
  <Link to=''  onClick={logout} className='p-4 hover:underline text-xl py-4 flex'>Sair</Link>

  
  <li className='p-4'>
          {/* Cart button */}
      <Link to= '/carrinho'>
        <button className='text-black hidden md:flex center p-1 text-orange-500'>
          <BsFillCartFill size={25} className='md:flex' />
        </button>
        
      </Link>
</li>
      </ul>
      
        
        
    
      
      <div className='flex items-center'>
        <div onClick={handleNav} className='cursor-pointer block md:hidden'>
        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25} />}
        </div>
        
      </div>

      
      
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      
      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <AiOutlineClose onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
        <h2 className='text-2xl p-4'>
          Du<span className='font-bold'>Morro</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800' >
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Home</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Sobre</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' />Categoria</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' />Login</li>
                
            </ul>
        </nav>
      </div>

    </div>
  
  );
};
 export default Navbar;