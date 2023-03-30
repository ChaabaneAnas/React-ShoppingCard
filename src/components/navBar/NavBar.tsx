import styles from './navBar.module.css';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { useState } from 'react';
import Basket from '../basket/Basket';

interface propTypes {
  logo: string;
  links: string[];
  count: number;
  props?: any;
}

const NavBar: React.FC<propTypes> = ({
  logo,
  links,
  count,
  props,
}): JSX.Element => {
  const [toggle, setToggle] = useState(false);
  function handleToggleMenu() {
    setToggle(!toggle);
  }

  return (
    <nav {...props} className={styles.nav}>
      <NavLink className={styles.brand} to='/'>
        {logo}
      </NavLink>

      <ul
        className={
          toggle ? `${styles.navLinks} ${styles.active}` : styles.navLinks
        }
      >
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={index === 0 ? '/' : `/${link}`}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? styles.Active : ''
              }
            >
              {link}
            </NavLink>
          </li>
        ))}
        <Basket count={count} />
      </ul>

      <div className={styles.hamburger} onClick={handleToggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </nav>
  );
};

export default NavBar;
