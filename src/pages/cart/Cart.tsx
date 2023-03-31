import styles from './cart.module.css';
import { shoppingCartInterface } from '../../globalTypes';

interface propTypes {
  basket: shoppingCartInterface[];
}

const Cart = ({ basket }: propTypes) => {
  return (
    <div className={styles.container}>
      <h2>My Card</h2>
      <ul>{basket?.map((item) => item.quantity)}</ul>
    </div>
  );
};

export default Cart;
