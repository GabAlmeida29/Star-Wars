import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function MenuOpcoes() {

    const navigate = useNavigate();
    const logoff = () => {
        sessionStorage.removeItem("login")
        navigate("/")
    }
    return (
        <div className='menu'>
            <Link to="/menu">
                <div className='itemMenu'>Home</div>
            </Link>
            <Link to="/films">
                <div className='itemMenu'>Films</div>
            </Link>
            <Link to="/starships">
                <div className='itemMenu'>Starships</div>
            </Link>
            <Link to="/people">
                <div className='itemMenu'>People</div>
            </Link>
            <Link to="/planets">
                <div className='itemMenu'>Planets</div>
            </Link>
            <Link to="/species">
                <div className='itemMenu'>Species</div>
            </Link>
            <Link to="/duvidas">
                <div className='itemMenu'>Dúvidas</div>
            </Link>

            <Link to="/about">
                <div className='itemMenu'>About</div>
            </Link>
            <div className='itemMenu' onClick={logoff}>Logoff</div>
        </div>
    )
}
