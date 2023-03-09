import { useEffect, useReducer } from 'react';
import { Product } from './features/product/Product';
import { ctx } from './context';
import { reducerFn, initialState } from './reducer';
import './App.css';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then((res) =>
      res
        .json()
        .then((data) => dispatch({ type: 'ADD_PRODUCTS', payload: data }))
    );
  }, []);

  return (
    <ctx.Provider value={state}>
      <div className='App'>
        <div className='container'>
          {state.products.length ? (
            state.products.map((product) => (
              <Product
                key={product.id}
                title={product.title}
                image={product.image}
              />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
    </ctx.Provider>
  );
}

export default App;
