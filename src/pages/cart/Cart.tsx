import styles from './cart.module.css';
import { useContext } from 'react';
import { ctx } from '../../context';
import CartItem from '../../components/cartItem/CartItem';
import { formatCurrency } from "../../utility's/formatCurrency";

interface propTypes {
  isOpen: boolean;
}

const Cart = ({ isOpen }: propTypes) => {
  const { shoppingCart, products } = useContext(ctx)!;
  return (
    <div
      className={
        isOpen ? `${styles.container} ${styles.active}` : styles.container
      }
    >
      <h2>My Cart</h2>
      <ul className={styles.items}>
        {shoppingCart.map((item) => (
          <CartItem {...item} />
        ))}
      </ul>
      <h4>
        Total:
        {formatCurrency(
          shoppingCart.reduce((acc, curr) => {
            const item = products.find((item) => item.id === curr.id);
            return acc + (item?.price || 0)  * curr.quantity;
          }, 0)
        )}
      </h4>
    </div>
  );
};

export default Cart;
