// IMPORTS

import { useState, useEffect } from 'react';
import getDataFromApi from '../services/api';
import '../styles/App.css';
import CharacterList from './CharacterList';

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
        <h1 className='header_title'>Rick & Morty</h1>
      </header>
      <main className='main'>
        <form className='filters'>
          <h2 className='filters__title'>Filtrar por...</h2>
        </form>
        <section className='characters'>
          <h2 className='characters_title'>Lista de personajes</h2>
          <CharacterList characterList={characterList} />
        </section>
      </main>
    </div>
  );
}

// EXPORT DEL COMPONENTE

export default App;
