function CharacterItem({ eachCharacter }) {
  return (
    <>
      <img
        className='charlist_card-img'
        src={eachCharacter.image}
        alt={`Foto de ${eachCharacter.name}`}
      />
      <h3 className='charlist_card-name'>{eachCharacter.name}</h3>
      <p className='charlist_card-species'>{eachCharacter.species}</p>
    </>
  );
}

export default CharacterItem;
