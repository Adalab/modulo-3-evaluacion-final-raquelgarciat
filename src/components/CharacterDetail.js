import { Link } from 'react-router-dom';

function CharacterDetail({ characterData }) {
  if (characterData) {
    return (
      <div className='detail'>
        <img src={characterData.image} alt={`${characterData.name}`} />
        <section>
          <h2 className='detail_title'>{characterData.name}</h2>
          <ul className='detail_data'>
            <li className='detail_data-li'>
              Status: {characterData.status}
            </li>
            <li className='detail_data-li'>
              Species: {characterData.species}
            </li>
            <li className='detail_data-li'>
              Origin: {characterData.planet}
            </li>
            <li className='detail_data-li'>
              Episodes: {characterData.episodes}
            </li>
          </ul>
          <Link className='detail_back' to='/'>Go back</Link>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <p className='errormsg'>
          We couldn't find that character in any known universe!
        </p>
        <Link to='/'>Go back</Link>
      </div>
    );
  }
}

export default CharacterDetail;
