import CharacterItem from './CharacterItem';

function CharacterList({ characterList }) {
  const htmlLi = characterList.map((eachCharacter) => (
    <li key={eachCharacter.id} className='card'>
      <CharacterItem eachCharacter={eachCharacter} />
    </li>
  ));

  return <ul className='cards'>{htmlLi}</ul>;
}

export default CharacterList;
