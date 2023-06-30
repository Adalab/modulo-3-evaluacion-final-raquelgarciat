// IMPORTS

import { useState, useEffect } from 'react';
import getDataFromApi from '../services/api';
import '../styles/App.css';

// FUNCIÓN DEL COMPONENTE

function App() {
  // SECCIÓN DE VARIABLES DE ESTADO

  const [charList, setCharList] = useState([]);

  // SECCIÓN DE CÓDIGO CUANDO CARGA LA PÁGINA

  useEffect(() => {
  
    getDataFromApi().then((cleanData) => {
      setCharList(cleanData);
      console.log(cleanData);
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
          <h2 className='filters__title title--medium'>Filtrar por...</h2>
        </form>
        <section className='contacts'>
          <h2 className='contacts__title title--medium'>Lista de personajes</h2>
          <ul className='cards'>
            <li className='card'></li>
            <li className='card'></li>
            <li className='card'></li>
          </ul>
        </section>
      </main>
    </div>
  );
}

// EXPORT DEL COMPONENTE

export default App;
