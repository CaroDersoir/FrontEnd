import '../styles/Header.css';
import logo from "../assets/go.png";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header">
      <img src={logo} alt="Logo" className="site-header__logo" />
      <nav className="site-header__nav">
        <Link className="site-header__link" to="/">Home</Link>
        <Link className="site-header__link" to="/detail">Detail</Link>
        <Link className="site-header__link" to="/preferences">Preferences</Link>
        <Link className="site-header__link" to="/partitions">Partitions</Link>
        <Link className="site-header__link" to="/planning">Planning</Link>
        <Link className="site-header__link" to="/location">Location</Link>
        <Link className="site-header__link" to="/formations">Formations</Link>
        <Link className="site-header__link" to="/merch">Merch</Link>
      </nav>
    </header>
  );
}


export default Header
