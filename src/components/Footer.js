import { pageLinks, socialLinks } from '../data';

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((obj) => {
          return (
            <li key={obj.id}>
              <a href={obj.href} className="footer-link">
                {obj.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map(({ href, icon, id }) => {
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
