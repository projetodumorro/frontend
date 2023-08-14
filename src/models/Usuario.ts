import Item from "./Item";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  tipo: string;
  item?: Item | null;
}