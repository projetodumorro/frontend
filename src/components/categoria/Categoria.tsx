import React, { useEffect, useState } from 'react';
//import { data } from './data';
import { buscar, atualizar, cadastrar } from '../../services/Service';
import Item from '../../models/Item';
import { Link } from 'react-router-dom';
import ListaItens from '../itens/listaItens/ListaItens';



function Categoria () {

  return (
    <ListaItens />
  )
};

export default Categoria;
