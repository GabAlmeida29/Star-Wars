import { Grid, IconButton } from '@mui/material'
import React, { useLayoutEffect, useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { pegarGamers, deleteGamer } from '../services/BancoService'

export default function Menu(props) {

  const [gamers, setGamers] = useState([])

  const buscarGamers = () => {
    pegarGamers()
      .then((dados) => setGamers(dados))
      .catch((e) => alert(e))
  }

  useLayoutEffect(() => {

    buscarGamers()
  }, [])

  const deletarGamer = async (id) => {

    try {
      await deleteGamer(id)
      alert("Dados Excluídos")
      buscarGamers()

    } catch (error) {
      alert(error)
    }
  }


  return (
    <>
      <Grid container style={{ padding: 10 }}>
        <Grid item md={12} xs={12} sm={12}>
          <Cabecalho />
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <MenuOpcoes />
          <div className='corpo'>
            
          </div>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <Rodape />
        </Grid>
      </Grid>
    </>

  )
}
