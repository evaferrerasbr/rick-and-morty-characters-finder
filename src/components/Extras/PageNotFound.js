import { Link } from 'react-router-dom';
import '../../stylesheets/extras/PageNotFound.scss';
import pageNotFound from '../../images/page-not-found.png';

function PageNotFound() {
  return (
    <article className="PageNotFound">
      <img
        className="PageNotFound__img"
        src={pageNotFound}
        alt="No results for your search"
      />
      <p className="PageNotFound__text">
        Uh, you are trying to navegate to a page I haven't developed
      </p>
      <Link className="PageNotFound__link" to="/">
        Go back home
      </Link>
    </article>
  );
}

export default PageNotFound;
