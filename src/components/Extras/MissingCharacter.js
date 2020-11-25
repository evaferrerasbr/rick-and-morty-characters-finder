import { Link } from 'react-router-dom';

function MissingCharacter() {
  return (
    <>
      <p>Holly shit, the character you want doesn't exist</p>
      <Link to="/">Go back to all characters</Link>
    </>
  );
}

export default MissingCharacter;
