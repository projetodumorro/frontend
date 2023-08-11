import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';
import Item from '../../../models/Item';
import { buscar } from '../../../services/Service';
import { Link } from 'react-router-dom';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


function ListaItens() {
  const [itens, setItens] = useState<Item[]>([]);
  
 

  let navigate = useNavigate();

  const { usuario, handleLogout, adicionarProduto, removerProduto } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado');
      navigate('/');
    }
  }, [token]);

  async function buscarPostagens() {
    try {
      await buscar('/itens', setItens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [itens.length]);

  
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

{itens.map((item, index) => (
  
      <Card className="w-60" key={index}>
      <CardHeader shadow={false} floated={false} className="h-96">
        <img
          src={item.foto}
          alt="card-image"
          className="h-[240px] w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {item.nome}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {item.preco}
          </Typography>
        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {item.descricao}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Adicionar ao Carrinho
        </Button>
      </CardFooter>
    </Card>
    
})


</>)
    
    
      

  


export default ListaItens;