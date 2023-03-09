import styles from './prodructs.module.css';
interface productProps {
  title: string;
  image: string;
}

const Product: React.FC<productProps> = ({ title, image }): JSX.Element => {
  return (
    <div className={styles.Product}>
      <div className={styles.Product_thumbnail}>
        <img src={image} alt='Product' />
        <h2 className={styles.Product_title}>{title}</h2>
      </div>
    </div>
  );
};

export { Product };
