import styles from './navBar.module.css';
import React from 'react';

const NavBar = () => {
  return (
    <nav className={styles.flex}>
      <a className={styles.Brand} href='/'>
        LOGO
      </a>

      <ul className={styles.flex}>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/cart'>Cart</a>
        </li>
        <li>
          <a href='/On_sale'>On Sale</a>
        </li>
        <li>
          <a href='/About'>About</a>
        </li>
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
