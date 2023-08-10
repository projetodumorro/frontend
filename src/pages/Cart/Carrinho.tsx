import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function Carrinho() {
  const { items, limparCart, removerProduto } = useContext(AuthContext);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h1>{item.nome}</h1>
          <h2>{item.descricao}</h2>
          <h2>R${item.preco}</h2>
          <h2>Quantidade: {item.quantidade}</h2>
          <br></br>
          <button onClick={() => removerProduto(item.id)}>Remover do Carrinho</button>
        </div>
      ))}

      <button onClick={limparCart}>Finalizar Comprar</button>
    </div>
  );
}

export default Carrinho;
