//import { useState } from 'react'
import './App.css'
import { Element, Link } from 'react-scroll';
import Inicio from './pages/Inicio'
import Sobre from './pages/Sobre'
import Habilidades from './pages/Habilidades'
import Projetos from './pages/Projetos'
import Contatos from './pages/Contatos'
import { Fab } from '@mui/material';
import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Element name='Inicio'>
        <Inicio />
      </Element>
      <Element name='Sobre'>
        <Sobre />
      </Element>
      <Element name='Habilidades'>
        <Habilidades />
      </Element>
      <Element name='Projetos'>
        <Projetos />
      </Element>
      <Element name='Contatos'>
        <Contatos />
      </Element>
    </div>
    <div className='fixed bottom-10 right-10 z-50 '>
      <Link to="Inicio" duration={550}>
      <Fab variant="circular" size="large" color="primary" aria-label="top">
        <VerticalAlignTopIcon />
      </Fab>
      </Link>
    </div>

    </>
  )
}

export default App
