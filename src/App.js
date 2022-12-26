import React from 'react';
import { useState } from "react";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import './assets/css/estilos.css'
import Cadastro from "./pages/Cadastro";
import Starships from "./pages/Starships";
import Species from "./pages/Species";
import Planets from "./pages/Planets";
import Films from "./pages/Films";
import People from "./pages/People";
import About from "./pages/About";
import Duvidas from "./pages/Duvidas";
//import * as Firebase from './services/FirebaseConnect'

function App() {

  const [login, setLogin] = useState(false)

  const verificarLogin = () => {
    setLogin(sessionStorage.getItem("login"))
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/menu",
      element: login ? <Menu /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/cadastro",
      element: login ? <Cadastro /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/starships",
      element: login ? <Starships /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/Species",
      element: login ? <Species /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/planets",
      element: login ? <Planets /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/films",
      element: login ? <Films /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/people",
      element: login ? <People /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/about",
      element: login ? <About /> : <Login verificarLogin={verificarLogin} />,
    },
    {
      path: "/duvidas",
      element: login ? <Duvidas /> : <Login verificarLogin={verificarLogin} />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
