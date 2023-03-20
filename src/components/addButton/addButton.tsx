import { AiOutlineShoppingCart } from 'react-icons/ai';
import styles from './addButton.module.css';

interface propTypes {
  onClick: (event: React.MouseEvent<SVGAElement>) => void;
  color?: string;
}
const AddButton: React.FC<propTypes> = ({ onClick, color }): JSX.Element => {
  return (
    <AiOutlineShoppingCart
      className={styles.addToCart}
      color='red'
      onClick={onClick}
    />
  );
};

export default AddButton;
