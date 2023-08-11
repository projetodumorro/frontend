import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='inset-x-0max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-orange-500 relative z-10 p-4 bg-white'>
      <div>
        <h1 className='w-full text-3xl font-bold  text-orange-500'>DuMorro</h1>
        <p className='py-4 text-black'>Transformando vidas, Impulsionando negócios.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Solução</h6>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Categoria</h6>
        <ul>
            <li className='py-2 text-sm'>Produtos</li>
            <li className='py-2 text-sm'>Serviços</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Equipe</h6>
        <ul>
            <li className='py-2 text-sm'>Cinthia de Paula</li>
            <li className='py-2 text-sm'>Fabiana</li>
            <li className='py-2 text-sm'>Felipe Vitorino</li>
            <li className='py-2 text-sm'>Isabella Miguel</li>
            <li className='py-2 text-sm'>Jenny</li>
            <li className='py-2 text-sm'>Mikael</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Menu</h6>
        <ul>
            <li className='py-2 text-sm'>Home</li>
            <li className='py-2 text-sm'>Sobre</li>
            <li className='py-2 text-sm'>Login</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;