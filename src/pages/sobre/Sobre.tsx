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
        <h1 className="text-3xl font-bold mb-4 text-orange-500">Quem Somos Nós</h1>
        <p className="text-gray-700">
          Somos uma organização comprometida em fortalecer favelas e comunidades, reconhecendo suas culturas únicas
          e impulsionando suas economias locais. Através do poder do empreendedorismo e da criatividade, estamos
          construindo um futuro onde cada voz é ouvida e cada talento é valorizado.
        </p>
        <p className="text-gray-700 mt-4">
          Nossa equipe diversificada trabalha incansavelmente para criar oportunidades que inspirem mudanças positivas
          e amplifiquem histórias autênticas. Juntos, estamos moldando uma nova narrativa de prosperidade e inclusão
          para todas as comunidades que servimos.
        </p>
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