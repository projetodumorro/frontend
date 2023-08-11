import { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate} from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Item from '../../../models/Item';
import { buscar } from '../../../services/Service';
import Star from './../../../assets/star.svg'
import Star2 from './../../../assets/star-no-fill.svg'
import Star3 from './../../../assets/star-half-fill.svg'

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

<div className='grid grid-cols-2 lg:grid-cols-4 gap-1 pt-7 m-5'>
    {itens.map((item, index) => (
  
      <div className="w-[300px] h-[500px] bg-slate-50 text-gray-700 shadow-lg rounded-md overflow-hidden" key={index}>
      
            <img
                src={item.foto}
                alt="card-image"
                className="w-[full] object-cover"
            />
            <div className='p-5 flex flex-col gap-3'>

                <div className='flex items-center gap-2'>
                  <span className='px-3 py-1 rounded-full text-xs bg-gray-100'>stoque ready</span>
                  <span>{item.nome}</span>
                </div>
                <h2 className='text-bold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap'>{item.nome}</h2>
                 <div>
                      <span className='text-xl font-bold'>
                          R$ {item.preco},00
                      </span>

                      <div className='flex items-center gap-2 mt-1'> 
                        <span className='text-sm line-through opacity-50'>
                        
                          R$ {item.preco + (item.preco * 0.2)},00
                        </span>
                        <span className='bg-green-400 px-1.5 rounded-md text-xs text-white'>
                          20%
                        </span>
                      </div>
                  </div> 
                    <div className='flex flex-col w-1/12 gap-4'>
                      
                    <span className='flex items-center mt-1'>
                      <img src={Star} />
                      <img src={Star} />
                      <img src={Star} />
                      <img src={Star3} />
                      <img src={Star2} />
                      <span className='text-xs ml-2 text-gray-500'>
                        20k reviews
                      </span>
                    </span>
                    </div>
                    <div className='flex mt-5 gap-2'>
                      <button className='bg-orange-500/80 hover:bg-yellow-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wider transition
                       '>
                        Adicionar ao Carrinho
                      </button>
                    </div>
            </div>
      </div>
    ))}
      </div>
    </>
    );
  }   
export default ListaItens;