import CharacterItem from './CharacterItem';

function CharacterList({ characterList }) {
  const htmlLi = characterList.map((eachCharacter) => (
    <li key={eachCharacter.id} className='charlist_card'>
      <CharacterItem eachCharacter={eachCharacter} />
    </li>
  ));

  return <ul className='charlist_cards'>{htmlLi}</ul>;
}

export default CharacterList;
