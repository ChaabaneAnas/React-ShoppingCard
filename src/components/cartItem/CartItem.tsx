import { useContext } from 'react';
import { ctx } from '../../context';
import { formatCurrency } from "../../utility's/formatCurrency";
import styles from './cartItem.module.css';

interface propTypes {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: propTypes) => {
  const { products } = useContext(ctx)!;
  const item = products.find((item) => item.id === id);
  return (
    <div className={styles.container}>
      <img src={item?.image} alt='' />
      <h4>
        {item?.title}
        <span> x{quantity}</span>
      </h4>
      <span className={styles.itemTotal}>
        {formatCurrency(item!.price * quantity)}
      </span>
    </div>
  );
};

export default CartItem;
