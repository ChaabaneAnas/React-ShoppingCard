import styles from './cart.module.css';
import { productInterface } from '../../globalTypes';
import { Product } from '../../features/product/Product';

interface propTypes {
  basket: productInterface[];
}

const Cart = ({ basket }: propTypes) => {
  return (
    <div className={styles.container}>
      <h2>My Card</h2>
      <ul>
        {basket?.map((item) => (
          <Product product={item} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
