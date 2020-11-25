import { Link } from 'react-router-dom';
import '../../stylesheets/extras/MissingCharacter.scss';
import missingCharacter from '../../images/missing-character.png';

function MissingCharacter() {
  return (
    <article className="MissingCharacter">
      <div className="MissingCharacter__wrapper">
        <img
          className="MissingCharacter__img"
          src={missingCharacter}
          alt="No results for your search"
        />
        <p className="MissingCharacter__text">
          Holly shit, the character you want doesn't exist
        </p>
      </div>
      <Link className="MissingCharacter__link" to="/">
        Go back to all characters
      </Link>
    </article>
  );
}

export default MissingCharacter;
