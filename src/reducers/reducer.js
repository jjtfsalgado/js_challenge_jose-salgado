import json from '../products.json';

const initialState = {
  pageProducts: [],
  selectedPage: 1,
  numberPages: Math.ceil(json.products.length / 6)
}

export const productsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case "@@router/LOCATION_CHANGE": {
      const pageRoute = action.payload.pathname.split('')[1];

      return {
        ...state,
        pageProducts : json.products.slice(((pageRoute*6)-6), pageRoute*6)
      }
    }
  }
  return state;
};
