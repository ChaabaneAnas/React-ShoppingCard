import { useEffect, useReducer } from 'react';
import { ctx } from './context';
import { reducerFn, initialState } from './reducer';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Index from './pages/productDetails';
import Layout from './features/layout/layout';
import Cart from './pages/cart/Cart';

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
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='products/:title' element={<Index />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </Layout>
      </div>
    </ctx.Provider>
  );
}

export default App;
