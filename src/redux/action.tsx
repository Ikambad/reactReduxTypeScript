import {ADD_TO_CART, REMOVE_TO_CART} from './constants';

export const addToCartFunction = (item: any) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCartFunction = (item: any) => {
  return {
    type: REMOVE_TO_CART,
    payload: item,
  };
};
