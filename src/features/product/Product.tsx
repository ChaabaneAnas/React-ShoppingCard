import styles from './prodructs.module.css';
import { Link } from 'react-router-dom';
interface productProps {
  title: string;
  image: string;
  category: string;
}

const Product: React.FC<productProps> = ({
  title,
  image,
  category,
}): JSX.Element => {
  return (
    <div className={styles.Product}>
      <Link className={styles.card} to={`products/${title.trim()}`}>
        <div className={styles.Product_thumbnail}>
          <img src={image} alt='Product' />
        </div>
        <span>{category}</span>
        <h4 className={styles.Product_title}>{title}</h4>
      </Link>
    </div>
  );
};

export { Product };
