import { FC, useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { ctx } from '../../context';
import styles from './basket.module.css';

interface propTypes {
  onToggle: () => void;
}

const Basket: FC<propTypes> = ({ onToggle }) => {
  const { shoppingCart } = useContext(ctx)!;
  const count = shoppingCart.reduce((acc, curr) => acc + curr.quantity, 0);
  return (
    <div className={styles.container} onClick={onToggle}>
      <FaShoppingCart className={styles.basket} />
      <div className={styles.badge}>{count}</div>
    </div>
  );
};

export default Basket;
