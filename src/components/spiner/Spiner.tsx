import { ProgressBar } from 'react-loader-spinner';
import styles from './spiner.module.css';

const Spiner = () => {
  return (
    <div className={styles.spinner + ' flex_center'}>
      <ProgressBar borderColor='#3a3a44' barColor='orange' />
    </div>
  );
};

export default Spiner;
