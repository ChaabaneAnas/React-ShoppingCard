import { ReactNode, useContext, useState } from 'react';
import NavBar from '../../components/navBar/NavBar.js';
import { ctx } from '../../context/index.js';
import Cart from '../../pages/cart/Cart.js';

interface PropType {
  children: ReactNode;
}
const Layout = ({ children }: PropType): JSX.Element => {
  const [toggleCart, setToggleCart] = useState(false);
  const { shoppingCart: basket } = useContext(ctx)!;
  return (
    <main>
      <header>
        <NavBar logo='Gumia' count={basket.length} links={['Home', 'Sales']} />
      </header>
      <Cart basket={basket} />
      <section className='products_container'>{children}</section>
    </main>
  );
};

export default Layout;
