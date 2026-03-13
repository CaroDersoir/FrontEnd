import '../styles/Header.css';
import logo from "../assets/go.png";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__layout">
        <div className="header__logo-wrap">
          <img src={logo} alt="Logo" className="header__logo" />
        </div>
        <nav className="header__nav">
          <Link className="header__link" to="/">Home</Link>
          <Link className="header__link" to="/detail">Detail</Link>
          <Link className="header__link" to="/partitions">Partitions</Link>
          <Link className="header__link" to="/planning">Planning</Link>
          <Link className="header__link" to="/location">Location</Link>
          <Link className="header__link" to="/formations">Formations</Link>
          <Link className="header__link" to="/merch">Merch</Link>
        </nav>
        <div className="header__actions">
          <Link className="header__link header__link--pref" to="/preferences">
            Preferences
          </Link>
        </div>
      </div>
    </header>
  );
}


export default Header
