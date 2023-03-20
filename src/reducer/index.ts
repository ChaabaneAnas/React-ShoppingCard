import {
  actionInterface,
  productInterface,
  stateInterface,
} from '../globalTypes';

export const initialState: stateInterface = {
  products: [],
  shoppingCart: [],
};

export const reducerFn = (
  state: stateInterface,
  action: actionInterface
): stateInterface => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_PRODUCTS':
      return { ...state, products: payload as productInterface[] };
      break;
    case 'ADD_TO_CART':
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, payload as productInterface],
      };
    default:
      return state;
  }
};
