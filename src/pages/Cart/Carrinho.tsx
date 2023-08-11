import { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

function Carrinho() {
    const { items, limparCart, quantidadeItems, removerProduto } = useContext(AuthContext)
    
    return (        
        <div className='max-w-[1640px] m-5 px-4 py-12'>
               
<h1 className='text-orange-600 font-bold text-4xl text-center'>
  Carrinho
</h1>
<div className=''>
<div className='bg-slate-200 grid grid-cols-1 lg:grid-cols-6 gap-6 pt-5 p-5'>
  {items.map((item) => (
    <div
      key={item.id}
      className='border shadow-lg rounded-lg hover:scale-105 duration-300'
    >
      <img
        src={item.foto}
        alt={item.nome}
        className='w-full h-[100px] object-cover rounded-t-lg'
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
      <button className="bg-orange-500 hover:bg-orange-600 text-white w-max p-1 rounded m-5" onClick={() => removerProduto(item.id)}>Remover do Carrinho</button>
    </div>
  ))}
</div>
<button className="bg-orange-500 hover:bg-orange-600 text-white w-80 py-2 rounded" onClick={limparCart}>Finalizar Compra</button>
<button className="bg-orange-500 hover:bg-orange-600 text-white w-80 py-2 rounded m-5" >Quantidade de Produtos: <span className='text-bold'>{quantidadeItems}</span></button>
</div>
</div>
    )
}

export default Carrinho;
