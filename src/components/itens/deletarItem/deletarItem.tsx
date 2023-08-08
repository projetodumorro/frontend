import React, {useContext,useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Item from '../../../models/Item'
import { buscar, deletar } from '../../../services/Service'


function DeletarItem() {
    const [item, setItem] = useState<Item>({} as Item)

    let navigate = useNavigate()
  
    const { id } = useParams<{ id: string }>()
  
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token
  
    async function buscarPorId(id: string) {
      try {
        await buscar(`/itens/${id}`, setItem, {
          headers: {
            'Authorization': token
          }
        })
      } catch (error: any) {
        if (error.toString().includes('403')) {
          alert('O token expirou, favor logar novamente')
          handleLogout()
        }
      }
    }
  
    useEffect(() => {
      if (token === '') {
        alert('Você precisa estar logado')
        navigate('/login')
      }
    }, [token])
  
    useEffect(() => {
      if (id !== undefined) {
        buscarPorId(id)
      }
    }, [id])
  
    function retornar() {
      navigate("/itens")
    }
  
    async function deletarItem() {
      try {
        await deletar(`/itens/${id}`, {
          headers: {
            'Authorization': token
          }
        })
  
        alert('Item apagado com sucesso')
  
      } catch (error) {
        alert('Erro ao apagar o Item')
      }
  
      retornar()
    }
 
  return (
    <div className='container w-1/3 mx-auto'>
      <h1 className='text-4xl text-center my-4'>Deletar item</h1>

      <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar o item a seguir?</p>

      <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
      <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>Item</header>
      <div className="p-4">
        <p className='text-xl h-full'>{item.nome}</p>
        <p>{item.descricao}</p>
      </div>
      <div className="flex">
        <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={retornar}>Não</button>
        <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600 flex items-center justify-center' onClick={deletarItem}>
          Sim
        </button>
      </div>
    </div>
    </div>
  )
}

export default DeletarItem