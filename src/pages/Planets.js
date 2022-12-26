import { TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import starWarsApi from '../services/starWarsApi';
import { Grid, IconButton } from '@mui/material'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'

const Planets = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await starWarsApi.get('/planets');
        setData([...data.results]);
      } catch (e) {
      }

      setIsLoading(false);
    };
    getData();
  }, []);

  if (isLoading) return <h3>Carregando...</h3>;

  return (
    <>
      <Grid container style={{ padding: 10 }}>
        <Grid item md={12} xs={12} sm={12}>
          <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <MenuOpcoes />
          <div className='corpo'>
            <div className='table'>
            <TableHead>
        <TableRow>
          <TableCell variant="head">Nome</TableCell>
          <TableCell variant="head">Clima</TableCell>
          <TableCell variant="head">População</TableCell>
          <TableCell variant="head">Duração do ano</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((film, index) => (
          <TableRow key={index} className="film">
            <TableCell>{film.name}</TableCell>
            <TableCell>{film.climate}</TableCell>
            <TableCell>{film.population}</TableCell>
            <TableCell>{film.orbital_period}</TableCell>
          </TableRow>
        ))}
      </TableBody>
          </div >
          </div>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Rodape />
        </Grid>
      </Grid>
    </>
  );
};

export default Planets;