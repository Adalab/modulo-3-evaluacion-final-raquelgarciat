// IMPORTS

import { useState, useEffect } from 'react';
import getDataFromApi from '../services/api';
import '../styles/main.scss';
import CharacterList from './CharacterList';
import logo from '../images/logo.png';
import Filters from './Filters';

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

  // SECCIÓN DE HANDLERS/EVENTOS
  const [searchByName, setSearchByName] = useState('');
  const [searchBySpecies, setSearchBySpecies] = useState('');

  const handleFilter = (varName, varValue) => {
    if (varName === 'name') {
      setSearchByName(varValue);
    } else if (varName === 'species') {
      setSearchBySpecies(varValue);
    }
  };

  // SECCIÓN FUNCIONES DE PINTADO
  const filteredCharacters = characterList
    .filter((eachCharacter) =>
      eachCharacter.name.toLowerCase().includes(searchByName.toLowerCase())
    )
    .filter((eachCharacter) =>
      eachCharacter.species
        .toLowerCase()
        .includes(searchBySpecies.toLowerCase())
    );
  const species = characterList.map((eachCharacter) => eachCharacter.species);

  // SECCION HTML
  return (
    <div className='page'>
      <header className='header'>
        <img src={logo} alt='logo' className='header_logo' />
      </header>
      <main className='main'>
        <Filters
          searchByName={searchByName}
          searchBySpecies={searchBySpecies}
          handleFilter={handleFilter}
          species={species}
        />
        <section className='charlist'>
          <h2 className='charlist_title'>Lista de personajes</h2>
          <CharacterList characterList={filteredCharacters} />
        </section>
      </main>
    </div>
  );
}

// EXPORT DEL COMPONENTE

export default App;
