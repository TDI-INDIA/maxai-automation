import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          MaxAI Automation
        </Link>
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;