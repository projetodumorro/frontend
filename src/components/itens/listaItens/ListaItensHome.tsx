import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Item from '../../../models/Item';
import { buscar } from '../../../services/Service';
import { Link } from 'react-router-dom';

function ListaItensHome() {
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
          Produtos e Serviços DuMorro
        </h1>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
          {itens.map((item, itens) => (
            <div
              key={itens}
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
              <div className='flex justify-between px-1 m-3 text-black'>
                <p className='font-light'>{item.descricao}</p>
              </div>
              <div className='flex px-2 py-4 m-3 text-center'>
                <p>
                  <span className=' font-bold text-orange-500 p-3'>
                    R$ {item.preco}
                  </span>
                </p>
              </div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded m-5"><Link to={'/itens'}>Adquirir item</Link></button>
            </div>
          ))};
        </div>
      </div>
    </>
  );
}

export default ListaItensHome;