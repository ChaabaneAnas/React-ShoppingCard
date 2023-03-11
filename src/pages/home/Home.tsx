import { useContext } from 'react';
import { ctx } from '../../context';
import { Product } from '../../features/product/Product';

const Home: React.FC = (): JSX.Element => {
  const state = useContext(ctx);

  return (
    <div className='container'>
      {state?.products.length ? (
        state?.products.map((product) => (
          <Product
            key={product.id}
            title={product.title}
            image={product.image}
            category={product.category}
          />
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Home;
