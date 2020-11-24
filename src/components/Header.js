import logo from '../images/logo.png';
import '../stylesheets/components/Header.scss';

function Header() {
  return (
    <header className="Header">
      <img className="Header__img" src={logo} alt="Rick and Morty logo" />
    </header>
  );
}

export default Header;
