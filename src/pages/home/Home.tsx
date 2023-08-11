import './Home.css';
import ListaItensHome from '../../components/itens/listaItens/ListaItensHome';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import ListaItensHome2 from '../../components/itens/listaItens/ListaItensHome2';
import Carrossel from '../../components/carrossel/Carrossel';

function Home() {

  const { usuario } = useContext(AuthContext);
  let listaItensComponent;

  let listaItensHome2 = (
    < ListaItensHome2 />
  );
  let listaItensHome = (
    < ListaItensHome />
  );

  if (usuario.token !== "") {
    listaItensComponent = (
      listaItensHome
    );
  } else {
    listaItensComponent = (
      listaItensHome2
    )
  }

  return (
    <>
      <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Transformando<span className='text-orange-500'>vidas</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-orange-500'>Impulsionando</span> negócios.</h1>
          </div>
          <Carrossel />
        </div>
      </div>

      <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 m-10'>Anuncie aqui <p>seu negócio</p></p>
            {/*<button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>*/}
          </div>
          <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg'
            alt='/'
          />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 m-10'>Empoderando <p>empreendedores locais</p></p>
            {/*<button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>*/}
          </div>
          <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://cdn.pixabay.com/photo/2016/11/29/09/00/doughnuts-1868573_1280.jpg'
            alt='/'
          />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
          {/* Overlay */}
          <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4 m-10'>Conheça as maravilhas<p>escondidas da comunidade</p></p>
            {/*<button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>*/}
          </div>
          <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://cdn.pixabay.com/photo/2020/02/11/21/09/baker-4840960_1280.jpg'
            alt='/'
          />
        </div>
      </div>
      {listaItensComponent}
    </>
  );
}

export default Home;