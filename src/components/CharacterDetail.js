import { Link } from 'react-router-dom';
import icon from '../images/dead-icon.png';

function CharacterDetail(props) {
  const renderIcon = () => {
    return status === 'Dead' ? (
      <img src={icon} alt="This character is no longer alive" />
    ) : null;
  };

  const { image, name, species, status, origin, episodes } = props;
  return (
    <article>
      <Link to="/">Volver al listado de personajes</Link>
      <img src={image} alt={`${name}, Rick and Mortie character`} />
      <h3>{name}</h3>
      <ul>
        <li>Species: {species}</li>
        <li>Status:{status}</li>
        <li>Origin: {origin}</li>
        <li>Episodes: {episodes}</li>
      </ul>
      {renderIcon()}
    </article>
  );
}

export default CharacterDetail;
