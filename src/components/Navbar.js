import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href} className="nav-link">
                  {' '}
                  {text}{' '}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((obj) => {
            return (
              <li key={obj.id}>
                <a
                  href={obj.href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={obj.icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
