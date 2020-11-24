import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <>
      <p>La página a la que estás intentando navegar no existe.</p>
      <Link to="/">Volver a la página principal</Link>
    </>
  );
}

export default PageNotFound;
