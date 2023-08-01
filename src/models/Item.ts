import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Item {
  id: number;
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  quantidade: number;
  categoria: Categoria | null;
  usuario: Usuario | null;
}