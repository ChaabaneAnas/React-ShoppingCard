import {
  actionInterface,
  productInterface,
  shoppingCartInterface,
  stateInterface,
} from '../globalTypes';

function getQuantity() {}

export const initialState: stateInterface = {
  products: [],
  shoppingCart: [],
  getQuantity,
};

export const reducerFn = (
  state: stateInterface,
  action: actionInterface
): stateInterface => {
  const { type, payload } = action;
  const { id } = payload;
  switch (type) {
    case 'ADD_PRODUCTS':
      return { ...state, products: payload as productInterface[] };

    case 'ADD_TO_CART':
      console.log(
        state.shoppingCart.find((item) => item.id === id) == undefined
      );
      if (state.shoppingCart.find((item) => item.id === id) == undefined) {
        return {
          ...state,
          shoppingCart: [
            ...state.shoppingCart,
            payload as shoppingCartInterface,
          ],
        };
      } else {
        state.shoppingCart.map((item) => {
          console.log(item.id);
          if (item.id === id) return { ...item, quantity: item.quantity + 1 };
        });
      }
    default:
      return state;
  }
};
