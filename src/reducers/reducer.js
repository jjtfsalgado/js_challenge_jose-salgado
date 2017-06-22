import json from '../products.json';

const initialState = {
  pageProducts: []
}

console.log(json);

export const productsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case 'FETCH_PAGE_1': {
      return {
        ...state,
        pageProducts : json.products.slice(0, 6)
      }
    }
    case 'HELLO_WORLD_AGAIN': {
      return {
        ...state,
        message: action.payload
      }
    }
  }
  return state;
};
