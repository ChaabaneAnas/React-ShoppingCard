import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ctx } from '../../context';
import { actionInterface } from '../../globalTypes';
interface propTypes {
  dispatch: React.Dispatch<actionInterface>;
}
const Index: React.FC<propTypes> = ({ dispatch }): JSX.Element => {
  const { title } = useParams();
  const state = useContext(ctx);
  const product = state?.products.find(
    (product) => product.title.trim() === title?.trim()
  );
  console.log('Product', product);
  return (
    <div className='card'>
      <img src={product?.image} alt='' />
      <h2>{title}</h2>
      <span>{product?.rating.rate}</span>
      <span>{product?.price}</span>
      <p>{product?.description}</p>
    </div>
  );
};

export default Index;
