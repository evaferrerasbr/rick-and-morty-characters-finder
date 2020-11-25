import '../../stylesheets/extras/NotFound.scss';
import notFound from '../../images/not-found-character.png';

function NotFound() {
  return (
    <article className="NotFound">
      <img
        className="NotFound__img"
        src={notFound}
        alt="No results for your search"
      />
      <p className="NotFound__text">
        Holly shit, the character you want doesn't exist
      </p>
    </article>
  );
}

export default NotFound;
