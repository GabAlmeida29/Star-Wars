import ProfileImg from '../assets/images/profile2.jpg';
import { LinkedIn, GitHub } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Grid, IconButton } from '@mui/material'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import MenuOpcoes from '../components/MenuOpcoes'
import { Avatar } from '@mui/material';

const About = () => {
    return (
        <>
            <Grid container style={{ padding: 10 }}>
                <Grid item md={12} xs={12} sm={12}>
                    <Cabecalho />
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <MenuOpcoes />
                    <div className='corpo'>
                        <div className="about">
                            <Avatar
                                sx={{ width: 150, height: 150, objectPosition: 'top' }}
                                style={{ objectPosition: 'top' }}
                                alt="Remy Sharp"
                                src={ProfileImg}
                            />
                            <h1>Gabriel Franco de Almeida</h1>
                            <div className="link-group">
                                <a
                                    href="https://www.linkedin.com/in/gabriel-franco-de-almeida-a500b7206/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <LinkedIn />
                                </a>
                                <a
                                    href="https://github.com/GabAlmeida29"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <GitHub />
                                </a>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item md={12} xs={12} sm={12}>
                    <Rodape />
                </Grid>
            </Grid>
        </>
    );
};

export default About;