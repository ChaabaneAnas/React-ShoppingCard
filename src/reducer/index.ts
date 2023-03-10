import {
  actionInterface,
  productInterface,
  stateInterface,
} from '../globalTypes';

export const initialState: stateInterface = {
  products: [],
};

export const reducerFn = (
  state: stateInterface,
  action: actionInterface
): stateInterface => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_PRODUCTS':
      return { ...state, products: payload as productInterface[] };
    default:
      return state;
  }
};
