import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { AuthContext } from '../../../contexts/AuthContext'
import Categoria from '../../../models/Categoria'
import { buscar, deletar } from '../../../services/Service'
import { toastAlerta } from '../../../utils/toastAlerta'

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                toastAlerta('O token expirou, favor logar novamente', 'info')
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
        navigate("/categorias")
    }

    async function deletarCategoria() {
        try {
            await deletar(`/categorias/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            toastAlerta('Categoria apagada com sucesso', 'sucesso')

        } catch (error) {
            toastAlerta('Erro ao apagar a categoria', 'erro')
        }

        retornar()
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 text-white font-bold text-2xl bg-orange-500'>Categoria</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'><span className='text-bold'>Nome da Categoria: </span>{categoria.nome}</p>
                <p className='p-8 text-3xl bg-slate-200 h-full'><span className='text-bold'>Descrição: </span>{categoria.descricao}</p>
                <div className="flex">
                    <button className='bg-black hover:bg-gray-800 text-white w-full py-2 mt-2 rounded text-center' onClick={retornar}>Não</button>
                    <button className='bg-orange-500 hover:bg-orange-600 text-white w-full py-2 mt-2 rounded text-center' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria