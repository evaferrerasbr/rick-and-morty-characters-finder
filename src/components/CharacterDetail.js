import { Link } from 'react-router-dom';

function CharacterDetail(props) {
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
    </article>
  );
}

export default CharacterDetail;
