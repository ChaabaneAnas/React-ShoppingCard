import { ReactNode } from 'react';
import NavBar from '../../components/NavBar.js';

interface PropType {
  children: ReactNode;
}
const Layout = ({ children }: PropType): JSX.Element => {
  return (
    <main>
      <header>
        <NavBar logo='Gumia' links={['Home', 'Cart', 'Sales']} />
      </header>
      <section className='products_container'>{children}</section>
    </main>
  );
};

export default Layout;
