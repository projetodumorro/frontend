import React, {useContext,useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../../contexts/AuthContext'
import Item from '../../../models/Item'
import { buscar, deletar } from '../../../services/Service'
import Star from "./../../../assets/star.svg";
import Star2 from "./../../../assets/star-no-fill.svg";
import Star3 from "./../../../assets/star-half-fill.svg";
import { Link } from "react-router-dom";


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
              className="w-[full] h-[full] object-cover "
            />

            <div className="p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs bg-gray-100">
                  stoque ready
                </span>
                <span>{item.nome}</span>
              </div>

              <h2 className="text-bold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap">
                {item.nome}
              </h2>
              <div>
                <span className="text-xl font-bold">R$ {item.preco},00</span>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm line-through opacity-50">
                    R$ {item.preco + item.preco * 0.2},00
                  </span>
                  <span className="bg-green-400 px-1.5 rounded-md text-xs text-white">
                    20%
                  </span>
                </div>
              </div>

              <div className="flex flex-col w-1/12 gap-4">
                <span className="flex items-center mt-1">
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star} />
                  <img src={Star3} />
                  <img src={Star2} />
                  <span className="text-xs ml-2 text-gray-500">
                    20k reviews
                  </span>
                </span>
              </div>

              <div className="flex mt-5 gap-2">
                
                  <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded"
                  onClick={retornar}>
                  Não
                  </button>
                
                  <button className="bg-black hover:bg-gray-800 text-white w-full py-2 rounded"
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