import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import icon from '../images/dead-icon.png';
import unkwnon from '../images/unknown.jpeg';

function CharacterCard(props) {
  const renderIcon = () => {
    return status === 'Dead' ? (
      <img
        className="CharacterList__list--icon"
        src={icon}
        alt="This character is no longer alive"
      />
    ) : null;
  };

  const { id, image, name, species, status } = props;
  return (
    <Link className="CharacterList__link" to={`/character/${id}`}>
      <article className="CharacterList__article">
        <img
          className="CharacterList__list--img"
          src={image}
          alt={`${name}, Rick and Mortie character`}
        />
        <h3 className="CharacterList__list--name">{name}</h3>
        <ul className="CharacterList__list--features">
          <li className="CharacterList__list--species">Species: {species}</li>
          <li className="CharacterList__list--status">Status:{status}</li>
        </ul>
        {renderIcon()}
      </article>
    </Link>
  );
}

CharacterCard.defaultProps = {
  image: { unkwnon },
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
