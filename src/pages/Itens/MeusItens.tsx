import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Item from '../../models/Item';
import { buscar } from '../../services/Service';
import { Link } from 'react-router-dom';

function ListaItens() {
  const [itens, setItens] = useState<Item[]>([]);
  
  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/');
    }
  }, [token]);

  async function buscarPostagens() {
    try {
      await buscar('/itens', setItens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [itens.length]);

  const itensDoUsuario = itens.filter(item => item.usuario?.id === usuario.id);
  return (
    <>
      {itens.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
    
   {/* Display dos Produtos */}
      <div className='max-w-[1640px] m-5 px-4 py-12'> 
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Meus Itens
      </h1>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
      {itensDoUsuario.map(item => (
          <div
             key={item.id}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.foto}
              alt={item.nome}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-5 m-3'>
              <p className='font-bold'>{item.nome}</p>
            </div>

            <div className='flex justify-between px-2 py-4 m-3'>
            <p>
                <span className='font-bold text-orange-500 p-3'>
                  R$ {item.preco}
                </span>
              </p>
            </div>

        <Link to={`/editarItem/${item.id}`} className="w-full">
             <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded">
                Editar
              </button>
        </Link>

        <Link to={`/deletarItem/${item.id}`} className="w-full">
            <button className="bg-black hover:bg-gray-800 text-white w-full py-2 mt-2 rounded">
               Deletar
            </button>
        </Link>

        </div>
          
        ))};
      </div>
      
      </div>
      
    </>
  );
}

export default ListaItens;