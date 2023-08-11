import { Link } from 'react-router-dom'
import Item from '../../../models/Item'
import './CardItem.css';

interface CardItemProps {
  post: Item
}

function CardItem({post}: CardItemProps) {
  return (
    
    <div className='border-slate-300 border flex flex-col rounded overflow-hidden justify-between'>
      <div>
      <div className="gallery">
        <a target="_blank" href="">
          <img src={post.foto} alt="" width="20px" height="20px"/>
        </a>
        <div className="desc">{post.nome}</div>
        <div className="desc">{post.descricao}</div>
        <div className="desc">R$:{post.preco}</div>
        <div className="desc">Quantidade:{post.quantidade}</div>
      </div>
      </div>
      <div className="flex">
      <Link to={`/editarItem/${post.id}`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarItem/${post.id}`} className='text-white bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardItem