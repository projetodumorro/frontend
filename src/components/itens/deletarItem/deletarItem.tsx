import {useContext,useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Item from '../../../models/Item'
import { buscar, deletar } from '../../../services/Service'

function DeletarItem() {
    
    let navigate = useNavigate()
    
    const [item, setItem] = useState<Item>({} as Item)
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
      navigate("/meusItens")
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
    <>
    <div className='flex flex-col items-center max-w-[1640px] m-5 px-4 py-12'>

<h1 className='text-orange-600 font-bold text-4xl text-center'>
  Deletar
</h1>

<div className='grid grid-cols-1 max-w-[300px] lg:grid-cols-1 gap-1 pt-4 center'>
  <p className='text-bold'>tem certeza que deseja deletar?</p>
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

       <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded" onClick={deletarItem}>
          Sim
        </button>
      <button className="bg-black hover:bg-gray-800 text-white w-full py-2 mt-2 rounded" onClick={retornar}>
         Não
      </button>
  </div>
  </div>
              </>
  )
}

export default DeletarItem