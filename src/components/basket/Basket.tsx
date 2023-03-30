import { FC } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './basket.module.css';

interface propTypes {
  count: number;
}

const Basket: FC<propTypes> = ({ count }) => {
  return (
    <div className={styles.container}>
      <FaShoppingCart />
      <div className={styles.badge}>{count}</div>
    </div>
  );
};

export default Basket;
