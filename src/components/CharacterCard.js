import { Link } from 'react-router-dom';

function CharacterCard(props) {
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
      </article>
    </Link>
  );
}

CharacterCard.defaultProps = {
  image: 'https://cdn.hackaday.io/images/original/6625541522281130571.gif',
  name: 'Personaje desconocido',
  species: 'Especie desconocida',
  status: 'Status desconocido',
};

export default CharacterCard;
