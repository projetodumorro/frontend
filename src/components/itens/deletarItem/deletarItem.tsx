import {useContext,useState,useEffect} from 'react'
import { useNavigate, useParams} from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Item from '../../../models/Item'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../utils/toastAlerta'

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
          toastAlerta('O token expirou, favor logar novamente', 'erro')
          handleLogout()
        }
      }
    }
  
    useEffect(() => {
      if (token === '') {
        toastAlerta('Você precisa estar logado', 'info')
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
  
        toastAlerta('Item apagado com sucesso', 'sucesso')
  
      } catch (error) {
        toastAlerta('Erro ao apagar o item', 'erro')
      }
  
      retornar()
    }
 
  return (
    <>
        <div className='container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-1 pt-7 '>

        <h1 className='text-orange-600 font-bold text-4xl text-center'>
          Deletar
        </h1>
        <h2 className='text-bold'>Tem certeza que deseja deletar?</h2>
      <div className=" container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-1 pt-7 ">
        
          <div
            className="w-[300px] h-[550px] bg-slate-50 text-gray-700 shadow-lg rounded-md overflow-hidden py-5"
            key={item.id}
          >
            <img
              src={item.foto}
              alt="card-image"
              className="w-[full] h-[full] object-cover rounded-t-md "
            />

            <div className="p-5 flex flex-col gap-3">

              <h2 className="text-bold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
                {item.nome}
              </h2>

              <div className="flex mt-5 gap-2">
                
                  <button className="bg-orange-500/80 hover:bg-orange-500 text-white w-full py-2 rounded"
                  onClick={retornar}>
                  Não
                  </button>
                
                  <button className="bg-black/80 hover:bg-black text-white w-full py-2 rounded"
                  onClick={deletarItem}>
                  Sim
                  </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeletarItem