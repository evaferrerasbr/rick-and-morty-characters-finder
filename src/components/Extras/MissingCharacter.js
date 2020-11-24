import { Link } from 'react-router-dom';

function MissingCharacter() {
  return (
    <>
      <p>Lo sentimos, ese personaje no existe</p>
      <Link to="/">Volver al listado de personajes</Link>
    </>
  );
}

export default MissingCharacter;
