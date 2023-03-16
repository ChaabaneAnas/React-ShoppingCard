import styles from './navBar.module.css';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface propTypes {
  logo: string;
  links: string[];
}

const NavBar: React.FC<propTypes> = ({ logo, links }): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <h1>
        <NavLink to='/'>{logo}</NavLink>
      </h1>

      <ul className={styles.flex}>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={index === 0 ? '/' : `/${link}`}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'Active' : ''
              }
            >
              {link}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.hamburger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default NavBar;
