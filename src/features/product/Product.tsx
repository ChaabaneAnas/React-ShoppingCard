import styles from './prodructs.module.css';
import { Link } from 'react-router-dom';
import AddButton from '../../components/addButton/addButton';
import { productInterface } from '../../globalTypes';
import { formatCurrency } from "../../utility's/formatCurrency";

interface productProps {
  product: productInterface;
  dispatch?: any;
}

const Product: React.FC<productProps> = ({
  product,
  dispatch,
}): JSX.Element => {
  const { id, title, image, category, price } = product;
  function handleAdd(e: React.MouseEvent<SVGAElement>): void {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, quantity: 1 },
    });
  }

  return (
    <div className={styles.Product}>
      <Link className={styles.card} to={`products/${title.trim()}`}>
        <div className={styles.Product_thumbnail}>
          <img src={image} alt='Product' />
        </div>
        <span>{category}</span>
        <h4 className={styles.Product_title}>{title}</h4>
      </Link>
      <footer className={styles.footer}>
        <span>{formatCurrency(price)}</span> <AddButton onClick={handleAdd} />
      </footer>
    </div>
  );
};

export { Product };
