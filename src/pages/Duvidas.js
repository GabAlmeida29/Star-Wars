import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { useNavigate } from 'react-router-dom'
import MenuOpcoes from '../components/MenuOpcoes'
import { salvarGamers } from '../services/BancoService'

export default function Cadastro(props) {
    const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [rede, setRede] = useState("")

    const limpar = () => {
        setNome("")
        setEmail("")
        setTelefone("")
        setRede("")
    }

    const salvar = async () => {


        const dados = {
            nome: nome,
            email: email,
            telefone: telefone,
            rede: rede
        }

        try {
            await salvarGamers(dados)
            alert("Dados Salvos com Sucesso")
            navigate('/menu')

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
                        <div className='titulo-duvida'>
                        <h2> Qual é a sua duvida?</h2>
                        </div>
                        <Grid container style={{ padding: 30 }} spacing={2}>
                                <TextField
                                    fullWidth
                                    label="Informe o seu Nome"
                                    variant="outlined"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />

                                <TextField
                                    fullWidth
                                    label="Informe o seu Whatsapp"
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <TextField
                                    fullWidth
                                    label="Informe o sua Dúvida "
                                    variant="outlined"
                                    value={telefone}
                                    onChange={(e) => setTelefone(e.target.value)}
                                />

                            <Grid item md={12} xs={12} sm={12}>
                                <Button
                                    variant="contained"
                                    style={{ marginRight: 10 }}
                                    onClick={salvar}
                                >Enviar</Button>
                                <Button variant="outlined" onClick={limpar}>Limpar Campos</Button>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>
            </Grid>
        </>

    )
}
