import React from 'react';
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react"

function Sobre() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen p-10">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
          <h1 className="text-3xl font-bold mb-4 text-orange-500">Bem-vindos ao DuMorro!</h1>
          <p className="text-gray-700">
            Somos muito mais do que apenas um marketplace - somos uma comunidade unida pela cultura, diversidade e paixão pela nossa periferia.
          </p>
          <p className="text-gray-700 mt-4">
            Nossa História:
            A jornada da [Nome da Sua Marca] começou nas ruas vibrantes e cheias de vida da nossa querida periferia. Cada rua, cada esquina e cada rosto familiar nos inspiraram a criar um espaço onde todos pudessem encontrar produtos que não apenas refletem nossa identidade, mas também elevam nossa autoestima e orgulho.
          </p>
          <p>Missão:
            Nossa missão é simples: Empoderar nossa comunidade através do comércio justo e do acesso a produtos autênticos. Acreditamos que a periferia é uma fonte infinita de talento, criatividade e resiliência, e nossa missão é destacar isso para o mundo. Queremos oferecer uma plataforma onde artesãos locais, empreendedores e artistas possam mostrar suas criações únicas.</p>
          <p>Diversidade e Inclusão: Celebramos a riqueza de culturas, histórias e perspectivas em nossa periferia. Acreditamos que é a nossa diversidade que nos torna mais fortes.
          </p>
          <p>Apoio à Economia Local: Acreditamos no poder do empreendedorismo local. Ao apoiar nossa loja, você também está apoiando os sonhos e aspirações dos talentos da nossa comunidade.</p>


        </div>
        <Card className="w-96">
          <List>
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src="https://media.licdn.com/dms/image/C4D03AQH6-3nKVV484g/profile-displayphoto-shrink_800_800/0/1649884804103?e=1697068800&v=beta&t=eV_EDQXeKSqxjyb1rl2mEH3MNdpR40ONy7cV1KFJzdo" />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Cinthia de Paula
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  Software Engineer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="alexander" src="https://media.licdn.com/dms/image/D4D03AQEiLYqdCYoBZQ/profile-displayphoto-shrink_800_800/0/1690306865009?e=1697068800&v=beta&t=3f3UXLGRiS0U-O5qnNmpcRErPWE5-rW8jreYIADY8AY" />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Fabiana Russo
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  Backend Developer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Avatar variant="circular" alt="emma" src="https://media.licdn.com/dms/image/D4D35AQEfZlvjfaN7JA/profile-framedphoto-shrink_800_800/0/1689050297731?e=1692122400&v=beta&t=eohjpjjhS4wt1iHOu9fMdgYmH8snj-e9jIU_TO2ysyE" />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
                  Felipe Vitorino
                </Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  UI/UX Designer @ Material Tailwind
                </Typography>
              </div>
            </ListItem>
          </List>
        </Card>

      </div>


    </>
  );

}

export default Sobre;