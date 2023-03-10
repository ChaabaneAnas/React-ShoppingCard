import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface PropType {
  children: ReactNode;
}
const Layout = ({ children }: PropType): JSX.Element => {
  const navigate = useNavigate();

  return (
    <main>
      <header>
        <button onClick={() => navigate('/')}>Logo</button>

        <button onClick={() => navigate('/cart')}>Go to cart</button>
      </header>
      <section className='products_container'>{children}</section>
    </main>
  );
};

export default Layout;
