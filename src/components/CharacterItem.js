function CharacterItem({ eachCharacter }) {
  return (
    <>
      <img
        className='card__image'
        src={eachCharacter.image}
        alt={`Foto de ${eachCharacter.name}`}
      />
      <h3 className='card__name'>{eachCharacter.name}</h3>
      <p className='card__species'>{eachCharacter.species}</p>
    </>
  );
}

export default CharacterItem;
