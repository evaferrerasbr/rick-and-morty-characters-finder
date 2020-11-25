import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import icon from '../images/dead-icon.png';
import '../stylesheets/components/CharacterDetail.scss';

function CharacterDetail(props) {
  const renderIcon = () => {
    return status === 'Dead' ? (
      <img
        className="CharacterDetail__list--icon"
        src={icon}
        alt="This character is no longer alive"
      />
    ) : null;
  };

  const { image, name, species, status, origin, episodes } = props;
  return (
    <article className="CharacterDetail__article">
      <img
        className="CharacterDetail__img"
        src={image}
        alt={`${name}, Rick and Mortie character`}
      />
      <h3 className="CharacterDetail__title">{name}</h3>
      <ul className="CharacterDetail__list">
        <li className="CharacterDetail__list--species">
          Species: {` ${species}`}
        </li>
        <li className="CharacterDetail__list--status">Status:{` ${status}`}</li>
        <li className="CharacterDetail__list--origin">
          Origin: {` ${origin}`}
        </li>
        <li className="CharacterDetail__list--episodes">
          Episodes: {episodes}
        </li>
      </ul>
      {renderIcon()}
      <Link className="CharacterDetail__link" to="/">
        Volver al listado de personajes
      </Link>
    </article>
  );
}

CharacterDetail.defaultProps = {
  image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
  name: ' Unknown character',
  species: ' Unknown',
  status: ' Unknown',
  origin: ' Unknown',
  episodes: ' Unknown',
};

CharacterDetail.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  origin: PropTypes.string,
  episodes: PropTypes.number,
};

export default CharacterDetail;
