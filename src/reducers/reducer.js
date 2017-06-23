import json from '../products.json';

const initialState = {
  pageProducts: [],
  selectedPage: null,
  currentPagination: [],
  numberPages: Math.ceil(json.products.length / 6)
}

export const productsReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case "@@router/LOCATION_CHANGE": {
      const routePath = action.payload.pathname;
      const pageRoute = routePath.split('').splice(1,routePath.length).join('');

      return {
        ...state,
        selectedPage: pageRoute,
        pageProducts : json.products.slice(((pageRoute*6)-6), pageRoute*6)
      }
    }
    case "MODIFY_PAGINATION": {
      return {
        ...state,
        currentPagination : action.payload
      }
    }
  }
  return state;
};
