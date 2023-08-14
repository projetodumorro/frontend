import {

  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare

} from 'react-icons/fa';
import Home from '../../pages/home/Home';

const Footer = () => {
  const githubDuMorro = 'https://github.com/projetodumorro';

  const DuMorro='https://frontend-ecru-two-98.vercel.app/';
  const JhennyIn = 'https://www.linkedin.com/in/jhennyticona/';
  const CinthiaIn = 'https://www.linkedin.com/in/cinthiadepaula/';
  const FabiIn = 'https://www.linkedin.com/in/fabiana-russo/';
  const IsaIn = 'https://www.linkedin.com/in/isabella-miguel-22960a274/';
  const FelipeIn = 'https://www.linkedin.com/in/felipevitorinu/';
  const MikaIn = 'https://www.linkedin.com/in/micael-augusto-santos/';
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600 '>
      <div>
      <span className="font-bold text-sx sx:text-left text-4xl">
      <a href="https://frontend-ecru-two-98.vercel.app/">
        <span className="text-orange-600">Du</span>
        <span className="text-gray-600">Morro</span>
      </a>
    </span>
        <p className='py-6 text-gray-500 text-lg leading-6'>Transformando vidas, Impulsionando negócios.</p>
        
        <div className='flex justify-between md:w-[75%] my-6 '> 

        <a href={githubDuMorro} target="_blank" rel="noopener noreferrer">
        <FaGithubSquare size={60}/>
      </a>
      <a href={DuMorro} target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare size={60} />
        </a>
        <a href={DuMorro} target="_blank" rel="noopener noreferrer">
            <FaInstagram size={60} />
            </a>
            <a href={DuMorro} target="_blank" rel="noopener noreferrer">
            <FaTwitterSquare size={60} />
            </a>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        
    <div>
      
        
        
    </div>
    
    <div className='font-medium text-gray-400'>
      
        <h6 className='font-medium text-gray-700'>Equipe</h6>
        <br></br>
        <ul>
            <li className='py-2 text-sm'>
              <a href={CinthiaIn} target="_blank" rel="noopener noreferrer">Cinthia de Paula
              </a>
          </li>
            <li className='py-2 text-sm'>
            <a href={FabiIn} target="_blank" rel="noopener noreferrer">Fabiana Russo
            </a>
            </li>
            <li className='py-2 text-sm'>
            <a href={FelipeIn} target="_blank" rel="noopener noreferrer">Felipe Vitorino
            </a>
            </li>
            <li className='py-2 text-sm'>
            <a href={IsaIn} target="_blank" rel="noopener noreferrer">Isabela Miguel
            </a>
            </li>
            <li className='py-2 text-sm'>
            <a href={JhennyIn} target="_blank" rel="noopener noreferrer">Jhenny Ticona
          </a>
          </li>
          <li className='py-2 text-sm'>
          <a href={MikaIn} target="_blank" rel="noopener noreferrer">Micael dos Santos
            </a>
            </li>
        </ul>
    </div>
    <div className='font-medium text-gray-400'>
        <h6 className='font-medium text-gray-700'>Site</h6>
        <br></br>
        <ul>
            <li className='py-2 text-sm'>
              <a href= "/home" rel="noopener noreferrer">Home
              </a>
          </li>
            <li className='py-2 text-sm'>
            <a href="/sobre" rel="noopener noreferrer">Sobre
            </a>
            </li>
            <li className='py-2 text-sm'>
            <a href="/login" rel="noopener noreferrer">Login
            </a>
            </li>
        </ul>
    </div>
      </div>
            <div className="sm:flex sm:items-center sm:justify-between"></div>
            <span className="text-sm sm:text-center text-gray-400">© 2023 <a href="https://frontend-ecru-two-98.vercel.app/" className="hover:underline">DuMorro</a>. All Rights Reserved.
            </span>
    </div>
    
  );
};

export default Footer;