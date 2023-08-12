import { useContext, useEffect, useState } from "react";
import { Dna } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Item from "../../../models/Item";
import { buscar } from "../../../services/Service";
import { Link } from "react-router-dom";
import Star from "./../../assets/star.svg";
import Star2 from "./../../assets/star-no-fill.svg";
import Star3 from "./../../assets/star-half-fill.svg";
import Reviews from "../../reviews/Reviews";

function ListaItens() {
  const [itens, setItens] = useState<Item[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [token]);

  async function buscarPostagens() {
    try {
      await buscar("/itens", setItens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
        handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [itens.length]);

  const itensDoUsuario = itens.filter(
    (item) => item.usuario?.id === usuario.id
  );
  return (
    <>
      {itens.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      {/* Display dos Produtos */}
      <div className=" container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-1 pt-7 ">
        {itensDoUsuario.map((item) => (
          <div
            className="w-[300px] h-[550px] bg-slate-50 text-gray-700 shadow-lg rounded-md overflow-hidden py-5"
            key={item.id}
          >
            <img
              src={item.foto}
              alt="card-image"
              className="w-[full] h-[full] object-cover rounded-t-md"
            />

            <div className="p-5 flex flex-col gap-3">
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

              <div className='flex justify-between'>
                <div className='flex items-center mt-1 self-start'>
                  <img src={Star} alt='Star' />
                  <img src={Star} alt='Star' />
                  <img src={Star} alt='Star' />
                  <img src={Star3} alt='Star3' />
                  <img src={Star2} alt='Star2' />
                </div>
                <div className='text-xs ml-2 text-gray-500 self-end'>
                  < Reviews /> views
                </div>
              </div>

              <div className="flex mt-5 gap-2">
                
                  <button className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded">
                  <Link to={`/editarItem/${item.id}`} className="w-full">Editar</Link>
                  </button>
                
                  <button className="bg-black hover:bg-gray-800 text-white w-full py-2 rounded">
                  <Link to={`/deletarItem/${item.id}`} className="w-full">Deletar</Link>
                  </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ListaItens;