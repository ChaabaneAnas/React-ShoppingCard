import { MdOutlineAddShoppingCart } from 'react-icons/md';
import styles from './addButton.module.css';

interface propTypes {
  onClick: (event: React.MouseEvent<SVGAElement>) => void;
  color?: string;
}
const AddButton: React.FC<propTypes> = ({ onClick, color }): JSX.Element => {
  return (
    <MdOutlineAddShoppingCart
      className={styles.addToCart}
      color='red'
      onClick={onClick}
    />
  );
};

export default AddButton;
