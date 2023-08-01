import Item from './Item';
import Usuario from './Usuario';

export default interface Categoria {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  //preco: float;
  //quantidade: number;
  usuario: Usuario | null;
  categoria: Categoria | null;
}