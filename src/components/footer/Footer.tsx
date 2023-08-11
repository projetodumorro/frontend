import {
    FaGithubSquare,
} from 'react-icons/fa';

const Footer = () => {
  const githubDuMorro = 'https://github.com/projetodumorro';
  const JhennyGit = 'https://github.com/jhennyticona';
  const CinthiaGit = 'https://github.com/cinthiadepaula';
  const FabiGit = 'https://github.com/fabianaRusso';
  const IsaGit = 'https://github.com/Isamiguel';
  const FelipeGit = 'https://github.com/FelipeVitorinu';
  const MikaGit = 'https://github.com/frizzly-mika';
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-orange-500'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#000] text-orange-500'>DuMorro </h1>
        <p className='py-6 text-black text-sm'>Transformando vidas, Impulsionando negócios.</p>
        <a href={githubDuMorro} target="_blank" rel="noopener noreferrer">
        <FaGithubSquare size={80}/>
      </a>
        <div className='flex justify-between md:w-[75%] my-6'> 
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
            <li className='py-2 text-sm'>
              <a href={CinthiaGit} target="_blank" rel="noopener noreferrer">Cinthia de Paula
              </a>
          </li>
            <li className='py-2 text-sm'>
            <a href={FabiGit} target="_blank" rel="noopener noreferrer">Fabiana
            </a>
            </li>
            <li className='py-2 text-sm'>
            <a href={FelipeGit} target="_blank" rel="noopener noreferrer">Felipe Vitorino
            </a>
            </li>
            <li className='py-2 text-sm'>
            <a href={IsaGit} target="_blank" rel="noopener noreferrer">Isabela Miguel
            </a>
            </li>
            <li className='py-2 text-sm'>
            <a href={JhennyGit} target="_blank" rel="noopener noreferrer">Jhenny
          </a>
          </li>
          <li className='py-2 text-sm'>
          <a href={MikaGit} target="_blank" rel="noopener noreferrer">Mikael
            </a>
            </li>
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