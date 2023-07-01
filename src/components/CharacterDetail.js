import { Link } from 'react-router-dom';

function CharacterDetail({ characterData }) {
  if (characterData) {
    return (
      <div className='detail'>
        <section className='card'>
          <img
            className='card_image'
            src={characterData.image}
            alt={`${characterData.name}`}
          />
          <div>
            <h2 className='card_title'>{characterData.name}</h2>
            <ul className='card_data'>
              <li className='card_data-li'>
                <span className='datatitle'>Status:</span>{' '}
                {characterData.status}
              </li>
              <li className='card_data-li'>
                <span className='datatitle'>Species:</span>{' '}
                {characterData.species}
              </li>
              <li className='card_data-li'>
                <span className='datatitle'>Origin:</span>{' '}
                {characterData.planet}
              </li>
              <li className='card_data-li'>
                <span className='datatitle'>Episodes:</span>{' '}
                {characterData.episodes}
              </li>
            </ul>
          </div>
        </section>
        <Link className='detail_back' to='/'>
          <i className='fa-solid fa-circle-left'></i> Go back
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <p className='detail_errormsg'>
          Sorry! We couldn't find that character in any known universe!
        </p>
        <Link className='detail_back' to='/'>
          <i className='fa-solid fa-circle-left'></i> Go back
        </Link>
      </div>
    );
  }
}

export default CharacterDetail;
