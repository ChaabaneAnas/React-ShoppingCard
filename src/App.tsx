import { useEffect, useReducer } from 'react';
import { ctx } from './context';
import { reducerFn, initialState } from './reducer';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Index from './pages/productDetails/productDetails';
import Layout from './features/layout/layout';
import Cart from './pages/cart/Cart';
import Spiner from './components/spiner/Spiner';

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
      {!state?.products.length && <Spiner />}

        <Layout>
          <Routes>
            <Route path='/' element={<Home dispatch={dispatch} />} />
            <Route
              path='products/:title'
              element={<Index dispatch={dispatch} />}
            />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Layout>
      </div>
    </ctx.Provider>
  );
}

export default App;
