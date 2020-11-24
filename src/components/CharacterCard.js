import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import icon from '../images/dead-icon.png';

function CharacterCard(props) {
  const renderIcon = () => {
    return status === 'Dead' ? (
      <img src={icon} alt="This character is no longer alive" />
    ) : null;
  };

  const { id, image, name, species, status } = props;
  return (
    <Link to={`/character/${id}`}>
      <article>
        <img src={image} alt={`${name}, Rick and Mortie character`} />
        <h3>{name}</h3>
        <ul>
          <li>Species: {species}</li>
          <li>Status:{status}</li>
        </ul>
        {renderIcon()}
      </article>
    </Link>
  );
}

CharacterCard.defaultProps = {
  image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
  name: 'Unknown character',
  species: 'Unknown',
  status: 'Unknown',
};

CharacterCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
};

export default CharacterCard;
