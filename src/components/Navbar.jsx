import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">Fairuz Farah Mukti</div>
      <ul className="nav-menu">
        <li><Link to="/">Tentang Saya</Link></li>
        <li><Link to="/projects">Proyek</Link></li>
        <li><Link to="/contact">Kontak</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;