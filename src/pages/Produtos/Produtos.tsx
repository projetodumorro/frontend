import { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../contexts/Context'
import { listar } from '../../services/Service'
import { Produto } from '../../models/Produto'

function Produtos() {
    const { adicionarProduto, removerProduto, quantidadeItems } = useContext(Context)

    const [produtos, setProdutos] = useState<Produto[]>([])

    async function listarProdutos() {
        try {
            await listar('produtos', setProdutos)
        } catch (error) {
            console.log(`Erro: ${error}`)
        }
    }

    useEffect(() => {
        listarProdutos()
    }, [])
 
    return (
        <div className='flex flex-col'>
            <div>Quantidade no Carrinho: {quantidadeItems}</div>

            <div className='my-5'>
                {
                    produtos.map((item) => {
                        return (
                            <>
                                <div key={item.id}>{item.nome}</div>
                                <button onClick={() => adicionarProduto(item)}>Adicionar ao Carrinho</button>
                                <button onClick={() => removerProduto(item.id)}>Remover do Carrinho</button>
                            </>
                        )
                    })
                }
            </div>

            <Link to="/carrinho">
                <button>Finalizar Compra</button>
            </Link>
        </ div>
    )
}

export default Produtos