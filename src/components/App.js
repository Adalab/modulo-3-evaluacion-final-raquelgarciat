// IMPORTS

import { useState, useEffect } from 'react';
import getDataFromApi from '../services/api';
import '../styles/main.scss';
import CharacterList from './CharacterList';
import logo from '../images/logo.png';

// FUNCIÓN DEL COMPONENTE

function App() {
  // SECCIÓN DE VARIABLES DE ESTADO

  const [characterList, setCharacterList] = useState([]);

  // SECCIÓN DE CÓDIGO CUANDO CARGA LA PÁGINA

  useEffect(() => {
  
    getDataFromApi().then((cleanData) => {
      setCharacterList(cleanData);
    });

  }, []);

  // SECCION HTML

  return (
    <div className='page'>
      <header className='header'>
        <img src={logo} alt="logo" className='header_logo'/>
      </header>
      <main className='main'>
        <form className='filters'>
          <h2 className='filters_title'>Filtrar por...</h2>
        </form>
        <section className='charlist'>
          <h2 className='charlist_title'>Lista de personajes</h2>
          <CharacterList characterList={characterList} />
        </section>
      </main>
    </div>
  );
}

// EXPORT DEL COMPONENTE

export default App;
