import '../../stylesheets/extras/ServerError.scss';
import serverError from '../../images/server-error.png';

function ServerError() {
  return (
    <article className="ServerError">
      <img className="ServerError__img" src={serverError} alt="Server error" />
      <p>The server doesn't feel like working...</p>
    </article>
  );
}

export default ServerError;
