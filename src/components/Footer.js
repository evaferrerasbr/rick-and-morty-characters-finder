import '../stylesheets/components/Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <p className="Footer__text">
        Developed by{' '}
        <a
          className="Footer__link"
          href="https://www.github.com/evaferrerasbr"
          target="blank"
        >
          Eva Ferreras
        </a>
      </p>
    </footer>
  );
}

export default Footer;
