import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Item from '../../../models/Item';
import Categoria from '../../../models/Categoria';
import { buscar, atualizar, cadastrar } from '../../../services/Service';

function FormularioItem() {
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: ''
  });

  const [item, setItem] = useState<Item>({
    id: 0,
    nome: '',
    descricao: '',
    foto: '',
    preco: 0,
    quantidade: 0,
    usuario: null,
    categoria: null
  });

  async function buscarItemPorId(id: string) {
    await buscar(`/itens/${id}`, setItem, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategoriaPorId(id: string) {
    await buscar(`/categorias/${id}`, setCategoria, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function buscarCategorias() {
    await buscar('/categorias', setCategorias, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
    if (id !== undefined) {
      buscarItemPorId(id);
      console.log(categoria);

    }
  }, [id]);

  useEffect(() => {
    setItem({
      ...item,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setItem({
      ...item,
      [e.target.name]: e.target.value,
      categoria: categoria,
      usuario: usuario,
    });
  }

  function retornar() {
    navigate('/itens');
  }

  async function gerarNovoItem(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({ item });

    if (id != undefined) {
      try {
        await atualizar(`/itens`, item, setItem, {
          headers: {
            Authorization: token,
          },
        });
        alert('Item atualizado com sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao atualizar o Item');
        }
      }
    } else {
      try {
        await cadastrar(`/itens`, item, setItem, {
          headers: {
            Authorization: token,
          },
        });

        alert('Item cadastrado com sucesso');
        retornar();
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        } else {
          alert('Erro ao cadastrar o Item');
        }
      }
    }
  }

  const carregandoCategoria = categoria.descricao === '';

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8 text-orange-500">{id !== undefined ? 'Editar Item' : 'Cadastrar Item'}</h1>

      <form onSubmit={gerarNovoItem} className="flex flex-col w-1/2 gap-4">
        <div className="flex flex-col gap-2">
          <label className='text-orange-500' htmlFor="nome">Nome do item</label>
          <input
            value={item.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-orange-500 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className='text-orange-500' htmlFor="descrição">Descrição do item</label>
          <input
            value={item.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Descricao"
            name="descricao"
            required
            className="border-2 border-orange-500 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className='text-orange-500' htmlFor="foto">Link da Foto</label>
          <input
            value={item.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="Foto"
            name="foto"
            required
            className="border-2 border-orange-500 rounded p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className='text-orange-500' htmlFor="preco">Preço do Item</label>
          <input
            value={item.preco}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="text"
            placeholder="preco"
            name="preco"
            required
            className="border-2 border-orange-500 rounded p-2"  
          />
        </div>
        <div className="flex flex-col gap-2 text-orange-500">
          <label className='text-orange-500' htmlFor="quantidade">Quantidade de Itens</label>
          <input
            value={item.quantidade}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            type="number"
            placeholder="quantidade"
            name="quantidade"
            required
            className="border-2 border-orage-500 rounded p-2"
            min="0"
          />
        </div>
        <div className="flex flex-col gap-2 className='text-orange-500'">
          <p className='text-orange-500'>Categoria do item</p>
          <select name="categoria" id="categoria" className='border p-2 border-orange-500 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
            <option value="" selected disabled>Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <>
                <option value={categoria.id} >{categoria.descricao}</option>
              </>
            ))}
          </select>
        </div>
        <button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
          {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
}

export default FormularioItem;