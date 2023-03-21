import { useContext } from 'react';
import { ctx } from '../../context';
import { Product } from '../../features/product/Product';
import { actionInterface } from '../../globalTypes';
import styles from './home.module.css';
import Spiner from '../../components/spiner/Spiner';
interface propTypes {
  dispatch: React.Dispatch<actionInterface>;
}

const Home: React.FC<propTypes> = ({ dispatch }): JSX.Element => {
  const state = useContext(ctx);

  return (
    <>
      {!state?.products.length && <Spiner />}
      {state?.products.length && (
        <div className={styles.container}>
          {state?.products.map((product) => (
            <Product key={product.id} product={product} dispatch={dispatch} />
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
