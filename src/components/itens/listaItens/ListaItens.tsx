import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Item from '../../../models/Item';
import { buscar } from '../../../services/Service';
import CardItem from '../cardItem/CardItem';

function ListaItens() {
  const [itens, setItens] = useState<Item[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout, adicionarProduto, removerProduto } = useContext(AuthContext);
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

      <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>
          Top Rated Menu Items
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
              <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.nome}</p>
                <p>
                  <span className='bg-orange-500 text-white p-1 rounded-full'>
                    {item.preco}
                  </span>
                </p>
              </div>
              <button className='bg-orange-500 text-white p-1 rounded-full'>Comprar</button>
              <button onClick={() => adicionarProduto(item)}>Adicionar ao Carrinho</button>
              
            </div>
          ))};
        </div>

      </div>

    </>
  );
}

export default ListaItens;