import { ReactNode,  useState } from 'react';
import NavBar from '../../components/navBar/NavBar.js';
import { ctx } from '../../context/index.js';
import Cart from '../../pages/cart/Cart.js';

interface PropType {
  children: ReactNode;
}
const Layout = ({ children }: PropType): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  function onToggle(): void {
    setIsOpen(!isOpen);
  }

  return (
    <main>
      <header>
        <NavBar onToggle={onToggle} logo='Gumia' links={['Home', 'Sales']} />
      </header>
      <Cart isOpen={isOpen} />
      <section className='products_container'>{children}</section>
    </main>
  );
};

export default Layout;
