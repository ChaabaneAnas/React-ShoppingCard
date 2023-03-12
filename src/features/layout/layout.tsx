import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar.jsx';

interface PropType {
  children: ReactNode;
}
const Layout = ({ children }: PropType): JSX.Element => {

  return (
    <main>
      <header>
        <NavBar />
      </header>
      <section className='products_container'>{children}</section>
    </main>
  );
};

export default Layout;
