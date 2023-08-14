import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react';
import { Avatar } from "@material-tailwind/react"

const participantes = [
  {
    nome: 'Cinthia de Paula',
    imagem: 'https://media.licdn.com/dms/image/C4D03AQH6-3nKVV484g/profile-displayphoto-shrink_800_800/0/1649884804103?e=1697068800&v=beta&t=eV_EDQXeKSqxjyb1rl2mEH3MNdpR40ONy7cV1KFJzdo',
    Lhref: 'https://www.linkedin.com/in/cinthiadepaula',
    Ghref: 'https://github.com/cinthiadepaula'
  },
  {
    nome: 'Fabiana Russo',
    imagem: 'https://media.licdn.com/dms/image/D4D03AQEiLYqdCYoBZQ/profile-displayphoto-shrink_200_200/0/1690306865009?e=1697068800&v=beta&t=5t-esA4glruvq5R3TnDVKWyq0OUC6rG1ybbIzUbzTBs',
    Lhref: '',
    Ghref: 'https://github.com/fabianaRusso'
  },
  {
    nome: 'Felipe Vitorino',
    imagem: 'https://media.licdn.com/dms/image/D4D03AQGttTLi_AZooQ/profile-displayphoto-shrink_200_200/0/1666889624019?e=1697068800&v=beta&t=uaAJx95dfdOIHfMb4YmFPXw0IgIbpZtUEARXyCPannM',
    Lhref: 'https://www.linkedin.com/in/felipevitorinu',
    Ghref: 'https://github.com/FelipeVitorinu'
  },
  {
    nome: 'Isabella Miguel',
    imagem: 'https://avatars.githubusercontent.com/u/133990782?v=4',
    Lhref: 'https://www.linkedin.com/in/isabella-miguel-22960a274/',
    Ghref: 'https://github.com/Isamiguel'
  },
  {
    nome: 'Jhenny de Castro',
    imagem: 'https://media.licdn.com/dms/image/D4D03AQFUiupl4pOpYA/profile-displayphoto-shrink_200_200/0/1690946328149?e=1697068800&v=beta&t=VYGuNKF7YaBcPxx9bY4O_cO9orTOQKK1ItmTBH1zz50',
    Lhref: 'https://www.linkedin.com/in/jhennyticona/',
    Ghref: 'https://github.com/jhennyticona'
  },
  {
    nome: 'Micael dos Santos',
    imagem: 'https://media.licdn.com/dms/image/D4D03AQHtqRzMK7RJmg/profile-displayphoto-shrink_800_800/0/1688426234402?e=1697068800&v=beta&t=hM9MDSBoLVomeyTIm3_9S-QnuNDS7JbjTrHfaQ4nK4w',
    Lhref: 'https://www.linkedin.com/in/micael-augusto-santos/',
    Ghref: 'https://github.com/frizzly-mika'
  },

];

const Sobre = () => {
  return (
    <>

      <div>

        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow relative p-4">
          <h1 className="text-3xl font-bold text-center mb-4 text-orange-500">BEM VINDES AO DUMORRO </h1>
          <p className="text-gray-700">

            Somos muito mais que um E-commerce somos uma comunidade unida pela cultura,diversidade e paixão pela nossa periferia.
            A nossa jornada começou nas ruas cheia de vida da nossa querida periferia.
            Cada rua, cada esquina e cada rosto familiar nos inspiraram a criar um espaço onde todos pudessem encontrar produtos
            que não apenas refletem nossa identidade, mas também elevam nossa autoestima e orgulho.
            Nossa missão é simples: empoderar nossa comunidade através do comercio justo e do acesso a produtos autenticos,
            acreditamos que a periferia é uma fonte infinita de talento e criatividade a nossa missão é destacar isso para o mundo.
            Oferencendo uma plataforma onde empreendedores e artesãos locais possam mostrar as suas criações.
            Celebramos a riqueza de culturas, histórias e perspectivas em nossa periferia.
            Acreditamos que é a nossa diversidade que nos torna mais fortes.

          </p>
          <p className="text-gray-700 mt-4">
            Nossa equipe diversificada trabalha incansavelmente para criar oportunidades que inspirem mudanças positivas
            e amplifiquem histórias autênticas. Juntos, estamos moldando uma nova narrativa de prosperidade e inclusão
            para todas as comunidades que servimos.
          </p>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl text-center font-semibold mb-6">Conheça Nossa Equipe</h1>

        <div className="grid grid-cols-2 gap-6 relative  p-4">
          {participantes.map((participante, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
              <Avatar
                src={participante.imagem}
                alt={participante.nome}
                className="w-16 h-16 rounded-full mx-auto mb-2"
              />
              <h2 className="text-lg font-semibold mb-2">{participante.nome}</h2>
              <div className='flex justify-center mx-20'>
                <a
                  href={participante.Lhref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  <LinkedinLogo size={24} className="mx-auto text-black" />
                </a>
                <a
                  href={participante.Ghref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline cursor-pointer"
                >
                  <GithubLogo size={24} className="mx-auto text-black" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* /* <div className="fixed inset-0 bg-center opacity-20 z-0">
        <img src={foto} alt="" className="w-full h-full object-cover" />
      </div> */}
    </>
  );
};

export default Sobre